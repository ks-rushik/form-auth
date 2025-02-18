import { Radio, RadioProps } from "@mantine/core";

type IRadioProp = RadioProps & {
  className?: string;
};

export default function BaseSelect(prop: IRadioProp) {
  const { className, ...other } = prop;
  return <Radio className={`${className}`} {...other} />;
}
