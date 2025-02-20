import { ComponentType, FC, ReactNode } from "react";
import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseLabel from "../ui/BaseLabel";

type IFormFieldProps = {
  label: string;
  name: string;
  component?: ComponentType;
  error?: string;
  children?: ReactNode;
};

const FormField: FC<IFormFieldProps> = (props) => {
  const {
    label,
    name,
    component: Component,
    error,
    children,
    ...componentProps
  } = props;

  return (
    <div className="mb-4">
      <BaseLabel htmlFor={name} labeltitle={label} />
      {Component && <Component {...componentProps} />}
      {children}
      {error && <BaseErrorMessage error={new Error(error)} />}
    </div>
  );
};

export default FormField;
