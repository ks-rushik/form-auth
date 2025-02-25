import UserForm from "@/app/components/auth/UserForm";
import { getUserProfile } from "./action";


export default async function UserProfilePage() {
  const defaultData = await getUserProfile();
 console.log(defaultData);
 
  return (
    <div>
      <UserForm defaultData={defaultData} />
    </div>
  );
}