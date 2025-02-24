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

const userformSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  phone: z
    .string()
    .min(1, "Contact number is required")
    .length(10, "Number is not valid"),
  address: z.string().min(9, "Atleast 9 character long "),
});

type UserFormData = z.infer<typeof userformSchema>;

const UserForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userformSchema),
  });
  console.log(errors);

  const onSubmit = (data: UserFormData) => {
    console.log("Profile Data:", data, file);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <FormGroup>
          <h1 className="flex flex-col items-center justify-center mb-10 text-xl">
            My Profile
          </h1>
          <FormField
            label="Restarunt Name"
            name="name"
            error={errors.name?.message}
            required={true}
          >
            <BaseInput
              {...register("name")}
              type="text"
              name="name"
              placeholder="Enter your restaurant name..."
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
              required={true}
              placeholder="Enter your Phone number..."
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
              type=""
              name="address"
              placeholder="Enter your Location..."
            />
          </FormField>
          <div className="mb-6">
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <BaseButton {...props}>Upload Logo</BaseButton>}
            </FileButton>
          </div>

          <BaseButton
            type="submit"
            intent="success"
            classNames={{
              root: "mb-2 w-full py-2 rounded-md",
            }}
          >
            Update Changes
          </BaseButton>
        </FormGroup>
      </form>
    </>
  );
};

export default UserForm;
