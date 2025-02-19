import { Radio, RadioProps, RadioStylesNames } from "@mantine/core";
import clsx from "clsx";
import { FC } from "react";

type IBaseRadioProps = RadioProps & {
  classNames?: {
    label: Partial<Record<RadioStylesNames, string>>;
    radio: Partial<Record<RadioStylesNames, string>>;
  };
};

const BaseRadio: FC<IBaseRadioProps> = (props) => {
  const { classNames, ...other } = props;
  const { label, radio, ...otherElement } = classNames || {};
  return (
    <Radio
      classNames={{
        label: clsx(
          " text-black-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
          label
        ),
        radio: clsx(
          " text-sm font-medium text-gray-900 dark:text-gray-300",
          radio
        ),
        ...otherElement,
      }}
      {...other}
    />
  );
};

export default BaseRadio;
