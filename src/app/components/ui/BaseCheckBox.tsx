import { Checkbox, CheckboxProps, CheckboxStylesNames } from "@mantine/core";
import clsx from "clsx";
import { FC } from "react";

type IBaseCheckBoxProp = CheckboxProps & {
  classNames?: {
    label: Partial<Record<CheckboxStylesNames, string>>;
  };
};

const BaseCheckBox: FC<IBaseCheckBoxProp> = (props) => {
  const { classNames, ...other } = props;
  const { label, ...otherElement } = classNames || {};
  return (
    <Checkbox
      classNames={{
        label: clsx(
          " text-black-400 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
          label
        ),
        ...otherElement,
      }}
      {...other}
    />
  );
};

export default BaseCheckBox;
