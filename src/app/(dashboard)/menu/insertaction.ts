"use server";
import { IMenudata } from "@/app/components/dashboard/menu/Menu";
import {  IModalData } from "@/app/components/dashboard/menu/Types";
import { createClient } from "@/utils/supabase/server";

export async function menu(formData:IModalData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  console.log("this is userId", userId);

  const menudata = {
    restaurant_id: userId,
    menu_name: formData.menu_name,
    currency: formData.currency,
    status: formData.status,
  };

  if(!userId) return

  
  // console.log(data, error);

  const { error: insertError ,data:InsertData} = await supabase
    .from("menus")
    .upsert(menudata)
    .select()

  if (insertError) {
    console.log(insertError);
  }
  // console.log(InsertData);
  
  return InsertData?.[0];
  
}

 const fetchMenudata = async() => {

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  console.log(userId);
  
  const { data, error } = await supabase
  .from("menus")
  .select("*")
  .eq("restaurant_id", userId!)
 

console.log(data);

 return data
}

export default fetchMenudata