import { FC, ReactNode } from "react";

type IFormGroupProps = {
  children: ReactNode;
};

const FormGroup: FC<IFormGroupProps> = (props) => {
  const { children } = props;
  return <div className=" m-4">{children}</div>;
};

export default FormGroup;
   