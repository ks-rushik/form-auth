import { Modal } from "@mantine/core";
import FormField from "../forms/FormField";
import BaseSelect from "../ui/BaseSelect";
import BaseInput from "../ui/BaseInput";
import BaseButton from "../ui/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MenuModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const ModalSchema = z.object({
    text: z.string().min(1, "Email is Required"),
    currency: z.string().min(1, "Password required"),
    availability: z.string().min(1, "Password required")
  });
  
 type IModalData = z.infer<typeof ModalSchema>;
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data:IModalData) => {
    console.log("Login Data:", data);
    
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Enter Menu" size={"md"}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormField label="Menu Name" name="text" required>
          <BaseInput type="text" name="text" placeholder="Enter Menu Name..." />
        </FormField>
        <FormField label="Enter currency" name="currency" required>
          <BaseSelect data={["$", "₹"]}  />
        </FormField>
        <FormField label="Availability" name="availability" required>
          <BaseSelect data={["Active", "InActive"]} defaultValue={"Active"} />
        </FormField>
        <BaseButton type="submit">Submit</BaseButton>
        </form>
      </Modal>
      <BaseButton intent={"primary"} onClick={open}>
        Add New Menu
      </BaseButton>
    </>
  );
};
export default MenuModal;
