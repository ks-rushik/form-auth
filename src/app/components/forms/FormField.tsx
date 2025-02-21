import { FC, ReactNode } from "react";
import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseLabel from "../ui/BaseLabel";

type IFormFieldProps = {
  label: string;
  name: string;
  error?: string;
  children?: ReactNode;
};

const FormField: FC<IFormFieldProps> = (props) => {
  const {
    label,
    name,
    error,
    children,
  } = props;

  return (
    <div className="mb-6">
      <BaseLabel htmlFor={name} labeltitle={label} />
      {children}
      {error && <BaseErrorMessage error={new Error(error)} />}
    </div>
  );
};

export default FormField;
