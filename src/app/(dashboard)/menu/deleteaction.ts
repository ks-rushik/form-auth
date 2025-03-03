'use server'
import { createClient } from "@/utils/supabase/server";

const deleteaction = async (id: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("menus").delete().eq("id", id);

  if (error) {
    console.log("Error deleting menu:", error)
  }
};
export default deleteaction;
