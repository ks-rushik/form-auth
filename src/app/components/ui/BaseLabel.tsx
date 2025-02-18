import { InputLabel, InputLabelProps } from "@mantine/core";

type ILableProp = InputLabelProps & {
  labeltitle: string;
  className: string
};

export default function BaseLabel(props: ILableProp) {
  const { labeltitle, className, ...other } = props;
  return (
    <InputLabel
      className={` p-3 text-blue-500 ${className}`}
      {...other}
      required
    >
      {labeltitle}
    </InputLabel>
  );
}
