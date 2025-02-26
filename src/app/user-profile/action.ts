"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
export async function submitUserForm(formData: FormData) {
  const supabase = await createClient();
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
    const fileName = `${logoFile.name}`;

    const { error } = await supabase.storage
      .from("logo")
      .upload(fileName, logoFile);
    if (error) {
      throw new Error(`Failed to upload logo: ${error.message}`);
    }
    const { data } = supabase.storage.from("logo").getPublicUrl(fileName);
    logoUrl = data.publicUrl;
  }
  const { data } = await supabase
    .from("user_profile")
    .select()
    .eq("id", userId)
    .single();

  if (data) {
    const { error: updateError } = await supabase
      .from("user_profile")
      .update({ name, phone, address, logo: logoUrl || data.logo })
      .eq("id", userId);

    if (updateError) {
      redirect("/error");
    }
  } else {
    const { error: insertError } = await supabase
      .from("user_profile")
      .insert([{ name, phone, address, logo: logoUrl }])
      .eq("id", userId);

    if (insertError) {
      redirect("/error");
    }
  }
  redirect("/");
}
export async function getUserProfile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  const { data } = await supabase
    .from("user_profile")
    .select()
    .eq("id", userId)
    .single();
  return data || { name: "", phone: "", address: "", logo: null };
}
