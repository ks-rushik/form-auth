import { Text, TextProps } from "@mantine/core";
import clsx from "clsx";
import { error } from "console";
import exp from "constants";
import { ErrorProps } from "next/error";
import { FC } from "react";

type IErrorMessage = TextProps & {
  error?:Error
};

const BaseErrorMessage:FC<IErrorMessage> = (props: IErrorMessage)=>{
  const {error, className, ...other } = props;

  return (
    <Text className={clsx("text-red-500 ", className)} {...other}>
      {error?.message}
    </Text>
  );
}

export default BaseErrorMessage
