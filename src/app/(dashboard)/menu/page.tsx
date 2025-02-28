import Menu from "@/app/components/dashboard/menu/Menu"
import { getMenuData, menu } from "./insertaction";

export default async function UserProfilePage() {
  const defaultMenu = await getMenuData()
  console.log(defaultMenu);
  
  
 
  return (
    <div>
      <Menu defaultData={defaultMenu}/>
    </div>
  );
}