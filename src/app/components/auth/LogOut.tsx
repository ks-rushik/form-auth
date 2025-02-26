import BaseButton from "../ui/BaseButton";
import signout from "@/app/auth/(authentication)/logout/action";

const LogOut = () => {
  return (
    <form onSubmit={signout}>
      <BaseButton type="submit" intent={"danger"} classNames={{root:" w-full "}}>LogOut</BaseButton>
    </form>
  );
};

export default LogOut;
