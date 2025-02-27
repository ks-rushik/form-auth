import UserForm from "@/app/components/UserForm";
import { getUserProfile } from "./action";


export default async function UserProfilePage() {
  const defaultData = await getUserProfile();
 
  return (
    <div>
      <UserForm defaultData={defaultData} />
    </div>
  );
}