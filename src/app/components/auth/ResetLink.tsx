"use client";
import { z } from "zod";
import FormField from "../forms/FormField";
import FormGroup from "../forms/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "@/app/auth/(reset)/reset-link/action";

const resetLinkSchema = z.object({
  email: z.string()
    .min(1, "Email is Required")
    .email("Invalid email format"),
});

export type IResetLinkData = z.infer<typeof resetLinkSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IResetLinkData>({
    resolver: zodResolver(resetLinkSchema),
  });

  const onSubmit = (data: IResetLinkData) => {
    console.log("Login Data:", data);
    return resetPassword(data.email)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <FormGroup>
          <h1 className="flex flex-col items-center justify-center mb-10 text-xl">
            Password Recovery
          </h1>
          <FormField label="Email" name="email" error={errors.email?.message} required={true}>
            <BaseInput
              {...register("email")}
              type="email"
              name="email"
              placeholder="Enter your email..."
             
            />
          </FormField>
          <BaseButton
            type="submit"
            intent="success"
            classNames={{
              root: "mb-2 w-full py-2 rounded-md",
            }}
            loading={isSubmitting} 
          >
          Enter Email
          </BaseButton>
        
        </FormGroup>
      </form>
    </>
  );
};

export default LoginForm;