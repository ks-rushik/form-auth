import { ComponentType } from "react";
import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseLabel from "../ui/BaseLabel";

type IFormFieldProps<T> = {
  label: string;
  name: string;
  component: ComponentType<T>;
  error?: string;
} & T;

const FormField = <T,>(props: IFormFieldProps<T>) => {
  const { label, name, component: Component, error, ...componentProps } = props;

  return (
    <div className="mb-4">
      <BaseLabel htmlFor={name} labeltitle={label} />
      <Component id={name} {...(componentProps as T)} />
      {error && <BaseErrorMessage error={new Error(error)} />}
    </div>
  );
};

export default FormField;