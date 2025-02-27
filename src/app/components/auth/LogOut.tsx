import { useDisclosure } from "@mantine/hooks";
import BaseButton from "../ui/BaseButton";
import signout from "@/app/auth/(authentication)/logout/action";
import { Modal } from "@mantine/core";

const LogOut = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Confirm action" >
        Are you sure you want to logout?
        <BaseButton
          type="submit"
          intent={"primary"}
          onClick={() => {signout();close()}}
          classNames={{ root: " w-full " }}
        >
          SignOut
        </BaseButton>
      </Modal>

      <BaseButton
        intent={"danger"}
        onClick={open}
        classNames={{ root: " w-full " }}
      >
        LogOut
      </BaseButton>
    </>
  );
};

export default LogOut;
