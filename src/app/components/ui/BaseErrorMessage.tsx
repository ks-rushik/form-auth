import { Text } from "@mantine/core";
import { ErrorProps } from "next/error";

type IErrorMessage = ErrorProps & {
  className?: string; 
  statusCode?: number
};

export default function BaseErrorMessage(props: IErrorMessage) {
  const { statusCode, title, className, ...other } = props;

  return (
    <Text className={className} {...other}>
      {title || `An error occurred (Code: ${statusCode})`}
    </Text>
  );
}
