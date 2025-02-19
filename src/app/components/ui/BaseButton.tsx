import { Button, ButtonProps, ButtonStylesNames } from "@mantine/core";
import clsx from "clsx";
import { FC } from "react";

type IBaseButtonProps = ButtonProps & {
  classNames?: {
    root: Partial<Record<ButtonStylesNames, string>>;
  };
};

const BaseInput:FC<IBaseButtonProps> = (props) => {
  const { classNames, disabled, children, ...other } = props;
  const { root, ...otherElement } = classNames || {};
  return (
    <Button
      classNames={{
        root: clsx(
         "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          {
            "mb-6  text-sm rounded-lg block  p-2.5 cursor-not-allowed":
              disabled,
          },
          root
        ),
        ...otherElement,
      }}
      disabled={disabled}
  
      {...other}
    >
      {children}
    </Button>
  );
}

export default BaseInput