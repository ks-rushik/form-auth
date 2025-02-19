import { ReactNode } from "react";
import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseLabel from "../ui/BaseLabel";

type IFormFieldProps = {
  label: string;
  name: string;
  component: ReactNode;
  error?: string;
};

export default function FormField(props: IFormFieldProps) {
  const { label, name, component: Component, error, ...componentProps } = props;
  return (
    <div className="mb-4">
      <BaseLabel htmlFor={name} labeltitle={label} />
      <Component id={name} {...componentProps} />
      {error && <BaseErrorMessage title={error} statusCode={0} />}
    </div>
  );
}





