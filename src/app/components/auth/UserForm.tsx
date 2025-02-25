"use client";

import { z } from "zod";
import FormField from "../forms/FormField";
import FormGroup from "../forms/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileButton } from "@mantine/core";
import { useState } from "react";
import { submitUserForm } from "@/app/auth/user-profile/action";

export const userformSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  phone: z
    .string()
    .min(1, "Contact number is required")
    .length(10, "Number is not valid"),
  address: z.string().min(9, "At least 9 characters long"),
});

export type IUserFormData = z.infer<typeof userformSchema>;

type IUserFormProps = {
  defaultData: {
    name: string;
    phone: string;
    address: string;
    logo: string | null;
  };
}

const UserForm = ({ defaultData }: IUserFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUserFormData>({
    resolver: zodResolver(userformSchema),
  });

  const onSubmit = async (data: IUserFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    if (file) {
      formData.append("logo", file);
    }
    return submitUserForm(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <FormGroup>
        <h1 className="flex flex-col items-center justify-center mb-10 text-xl">
          My Profile
        </h1>
        <FormField
          label="Restaurant Name"
          name="name"
          error={errors.name?.message}
          required={true}
        >
          <BaseInput
            {...register("name")}
            type="text"
            name="name"
            placeholder="Enter your restaurant name..."
            defaultValue={defaultData.name}
          />
        </FormField>

        <FormField
          label="Contact Number"
          name="phone"
          error={errors.phone?.message}
          required={true}
        >
          <BaseInput
            {...register("phone")}
            type="text"
            name="phone"
            placeholder="Enter your Phone number..."
            defaultValue={defaultData.phone}

          />
        </FormField>

        <FormField
          label="Location"
          name="address"
          error={errors.address?.message}
          required={true}
        >
          <BaseInput
            {...register("address")}
            type="text"
            name="address"
            placeholder="Enter your Location..."
            defaultValue={defaultData.address}

          />
        </FormField>

        <div className="mb-6">
          <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => <BaseButton {...props}>Upload Logo</BaseButton>}
          </FileButton>
          {file ? (
            <p>Selected: {file.name}</p>
          ) : (
            defaultData.logo && <p>Current Logo: {defaultData.logo}</p>
          )}
        </div>

        <BaseButton
          type="submit"
          intent="success"
          classNames={{
            root: "mb-2 w-full py-2 rounded-md",
          }}
          loading={isSubmitting}
        >
          Update Changes
        </BaseButton>
      </FormGroup>
    </form>
  );
};

export default UserForm;