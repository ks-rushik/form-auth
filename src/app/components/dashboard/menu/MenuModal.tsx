import { Modal } from "@mantine/core";
import FormField from "../../forms/FormField";
import BaseSelect from "../../ui/BaseSelect";
import BaseInput from "../../ui/BaseInput";
import BaseButton from "../../ui/BaseButton";
import { useDisclosure } from "@mantine/hooks";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { IMenu } from "./Types";
import { menu } from "@/app/(dashboard)/menu/insertaction";

export type IMenuModalProps = {
  onAddMenu: (data: IMenu) => void;
};

const MenuModal: FC<IMenuModalProps> = ({ onAddMenu }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const ModalSchema = z.object({
    menu: z.string().min(1, "Menu name is Required"),
    currency: z.string({required_error:"Currecny is required"}),
    availability: z.string({required_error:"Availability is required"})
  });

   type IModalData = z.infer<typeof ModalSchema>;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IModalData>({
    resolver: zodResolver(ModalSchema),
  });

  const onSubmit = (data: IModalData) => {
    onAddMenu(data);
    menu(data)
    console.log("Modal Data:", data);
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Enter Menu" size={"md"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="Menu Name"
            required
            name="menu"
            error={errors.menu?.message}
          >
            <BaseInput
              type="text"
              {...register("menu")}
              name="menu"
              placeholder="Enter Menu Name..."
            />
          </FormField>
          <FormField
            label="Enter currency"
            name="currency"
            required
            error={errors.currency?.message}
          >
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <BaseSelect
                  {...field}
                  name="currency"
                  placeholder="Enter Currency..."
                  data={["$", "₹", "€", "¥"]}
                />
              )}
            />
          </FormField>
          <FormField label="Availability" name="availability" required error={errors.availability?.message}>
            <Controller
              name="availability"
              control={control}
              render={({ field }) => (
                <BaseSelect data={["Active", "InActive"]}  placeholder="Active Or Not" {...field} />
              )}
            />
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
