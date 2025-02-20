"use client";
import { z } from "zod";
import FormField from "../forms/FormField";
import FormGroup from "../forms/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
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
    <form onSubmit={handleSubmit(onSubmit)} className="m-60">
      <FormGroup>
        <FormField label="Email" name="email" error={errors.email?.message}>
          <BaseInput
            {...register("email")}
            placeholder="Enter your email..."
            classNames={{ input: "w-52" }}
          /> 
        </FormField>
        <FormField
          label="Password"
          name="password"
          error={errors.password?.message}
        >
          <BaseInput
            {...register("password")}
            placeholder="Enter your Password"
            classNames={{ input: "w-52" }}
          />
        </FormField>
      </FormGroup>
      <BaseButton type="submit" intent="success" classNames={{ root: "ml-4" }}>
        Login
      </BaseButton>
    </form>
  );
};

export default LoginForm;
