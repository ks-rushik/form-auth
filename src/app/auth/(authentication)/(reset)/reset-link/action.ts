"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function resetPassword(email: string ) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:3000/auth/reset-password",
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/auth/login");
}
