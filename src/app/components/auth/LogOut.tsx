import { useDisclosure } from "@mantine/hooks";
import BaseButton from "../ui/BaseButton";
import signout from "@/app/auth/(authentication)/logout/action";
import { Modal } from "@mantine/core";

const LogOut = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Confirm action" size={"md"}>
        <div className="flex flex-col">
          {" "}
          Are you sure you want to logout?
          <BaseButton
            type="submit"
            intent={"primary"}
            classNames={{root:"w-32 mt-4"}}
            onClick={() => {
              signout();
              close();
            }}
          >
            Logout
          </BaseButton>
        </div>
      </Modal>

      <BaseButton
        intent={"danger"}
        onClick={open}
        classNames={{ root: " w-full " }}
      >
        Logout
      </BaseButton>
    </>
  );
};

export default LogOut;
