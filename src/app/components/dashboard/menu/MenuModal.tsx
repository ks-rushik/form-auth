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
import { IModalData } from "./Types";
import { menu } from "@/app/(dashboard)/menu/insertaction";

export type IMenuModalProps = {
  onAddMenu: (data: IModalData) => void;
};

const MenuModal: FC<IMenuModalProps> = ({ onAddMenu }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const ModalSchema = z.object({
    menu_name: z.string().min(1, "Menu name is Required"),
    currency: z.string({ required_error: "Currecny is required" }),
    status: z.string({ required_error: "Availability is required" }),
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
    console.log("Modal Data:", data);
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Enter Menu" size={"md"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="Menu Name"
            required
            name="menu_name"
            error={errors.menu_name?.message}
          >
            <BaseInput
              type="text"
              {...register("menu_name")}
              name="menu_name"
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
          <FormField
            label="Availability"
            name="status"
            required
            error={errors.status?.message}
          >
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <BaseSelect
                  data={["Active", "InActive"]}
                  placeholder="Active Or Not"
                  {...field}
                />
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








import { Modal } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect } from "react";
import { IModalData } from "./Types";
import FormField from "@/app/components/forms/FormField";
import BaseInput from "@/app/components/ui/BaseInput";
import BaseButton from "@/app/components/ui/BaseButton";
import BaseSelect from "@/app/components/ui/BaseSelect";

export type IMenuModalProps = {
    opened: boolean;
    onClose: () => void;
    onSave: (data: IModalData) => void;
    initialData?: IModalData | null;
  };
  
  const MenuModal: FC<IMenuModalProps> = ({ opened, onClose, onSave, initialData }) => {
    const ModalSchema = z.object({
      menu_name: z.string().min(1, "Menu name is Required"),
      currency: z.string().min(1, "Currency is required"),
      status: z.string().min(1, "Availability is required"),
    });
  
    type IModalData = z.infer<typeof ModalSchema>;
  
    const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors },
    } = useForm<IModalData>({
      resolver: zodResolver(ModalSchema),
      defaultValues: { menu_name: "", currency: "", status: "" },
    });
  
    useEffect(() => {
      reset(initialData || { menu_name: "", currency: "", status: "" });
    }, [initialData, reset]);
  
    const onSubmit = (data: IModalData) => {
      onSave(data);
      onClose();
    };
  
    return (
      <Modal opened={opened} onClose={onClose} title={initialData ? "Edit Menu" : "Enter Menu"} size="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField label="Menu Name" required name="menu_name" error={errors.menu_name?.message}>
            <BaseInput {...register("menu_name")} placeholder="Enter Menu Name..." />
          </FormField>
          <FormField label="Enter Currency" name="currency" required error={errors.currency?.message}>
            <Controller
              name="currency"
              control={control}
              render={({ field }) => <BaseSelect {...field} data={["$", "₹", "€", "¥"]} />}
            />
          </FormField>
          <FormField label="Availability" name="status" required error={errors.status?.message}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => <BaseSelect data={["Active", "Inactive"]} {...field} />}
            />
          </FormField>
          <BaseButton type="submit">{initialData ? "Update Menu" : "Add Menu"}</BaseButton>
        </form>
      </Modal>
    );
  };
  
  export default MenuModal;
