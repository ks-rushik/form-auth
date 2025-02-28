"use server";
import { IMenu, IMenuDefaulData } from "@/app/components/dashboard/menu/Types";
import { createClient } from "@/utils/supabase/server";

export async function menu(formData: IMenu) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  console.log("this is userId", userId);

  const menudata = {
    restaurant_id: userId,
    menu_name: formData.menu,
    currency: formData.currency,
    status: formData.availability,
  };

  const { data, error } = await supabase
    .from("menus")
    .select()
    .eq("restaurant_id", userId)
    .single();
  console.log(data, error);

  const { error: insertError ,data:InsertData} = await supabase
    .from("menus")
    .insert(menudata)
    .eq("restaurant_id", userId);

  if (insertError) {
    console.log(insertError);
  }
  console.log(InsertData);
  
//  return InsertData
}
export async function getMenuData(): Promise<IMenuDefaulData[]> {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userId = user?.id;
    console.log(userId);
    
    const { data } = await supabase
      .from("menus")
      .select()
      .eq("restaurant_id", userId);
      console.log(data);
      
  
    return data ?? [
      {
        menu: "",
        currency: "",
        availability: "",
      },
    ]; 
  }
  
