"use server";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export async function submitUserForm(formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const logoFile = formData.get("logo") as File | null;

  let logoUrl: string | null = null;

  if (logoFile && logoFile.size > 0) {
    const fileName = `${Date.now()}_${logoFile.name}`;

    const { error } = await supabase.storage
      .from("logo")
      .upload(fileName, logoFile);
    if (error) {
      throw new Error(`Failed to upload logo: ${error.message}`);
    }
    const { data } = supabase.storage.from("logo").getPublicUrl(fileName);
    logoUrl = data.publicUrl;
  }
  const { data: existingData } = await supabase
    .from("user_profile")
    .select("name, phone, address, logo")
    .eq("id", userId)
    .single();

  if (existingData) {
    const { error: updateError } = await supabase
      .from("user_profile")
      .update({ name, phone, address, logo: logoUrl || existingData.logo })
      .eq("id", userId);

    if (updateError) {
      redirect("/error");
    }
  } else {
    const { error: insertError } = await supabase
      .from("user_profile")
      .insert([{ name, phone, address, logo: logoUrl }]);

    if (insertError) {
      redirect("/error");
    }
  }
  redirect("/");
}

export async function getUserProfile() {
    const supabase =  createClient();
  
    const {
      data: { user }
    } = await supabase.auth.getUser();
    const userId = user?.id;
    console.log(user);
    
    const { data } = await supabase
      .from("user_profile")
      .select()
      .eq("id", userId)
      .single();
    return data || { name: "", phone: "", address: "", logo: null };
  }