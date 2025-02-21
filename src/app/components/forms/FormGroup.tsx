import { FC, ReactNode } from "react";

type IFormGroupProps = {
  children: ReactNode;
};

const FormGroup: FC<IFormGroupProps> = (props) => {
  const { children } = props;
  return <div className="flex h-[100vh] items-center justify-center px-6 py-8  mx-auto  lg:py-0 p-10 ">
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:bg-gray-800 dark:border-gray-700 border-2  ">{children}</div>
    </div>;
};

export default FormGroup;
   