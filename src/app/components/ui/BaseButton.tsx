import { Button, ButtonProps } from "@mantine/core";

type IButtonProp = ButtonProps & {
  className?: string;
};

export default function BaseInput(props: IButtonProp) {
  const { children, className, ...other } = props;
  return (
    <Button className={`${className}`} {...other}>
      {children}
    </Button>
  );
}
