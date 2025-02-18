import { Select, SelectProps } from "@mantine/core";

type ISelectProp = SelectProps & {
  className?: string;
};

export default function BaseSelect(prop: ISelectProp) {
  const { className, ...other } = prop;
  return <Select className={`${className}`} {...other} searchable />;
}
