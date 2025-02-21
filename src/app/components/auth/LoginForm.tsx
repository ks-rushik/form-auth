"use client";
import { z } from "zod";
import FormField from "../forms/FormField";
import FormGroup from "../forms/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().
  min(1,"Email is Required").
  email("Invalid email format"),
  password: z.string().min(1, "Password required") 
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <FormGroup>
          <h1 className="flex flex-col items-center justify-center mb-10 text-xl">
            Login Form
          </h1>
          <FormField label="Email" name="email" error={errors.email?.message}>
            <BaseInput
              {...register("email")}
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </FormField>
          <FormField
            label="Password"
            name="password"
            error={errors.password?.message}
          >
            <BaseInput
              {...register("password")}
              type="password"
              name="password"
              placeholder="Enter your Password"
              classNames={{ input: "focus-within " }}
            />
          </FormField>
          <BaseButton
            type="submit"
            intent="success"
            classNames={{
              root: "mb-2 w-full py-2 rounded-md",
            }}
          >
            Login
          </BaseButton>
          <div className="flex justify-between text-md  mb-4">
            <Link href="#">Forget password?</Link>
            <div className="flex gap-1 justify-end ">
              <span> Don't have account?</span>
              <Link href="#" className="text-blue-600 hover:underline">
                SignUp
              </Link>
            </div>
          </div>
        </FormGroup>
      </form>
    </>
  );
};

export default LoginForm;
