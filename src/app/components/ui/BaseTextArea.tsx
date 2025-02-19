import { Textarea, TextareaProps } from "@mantine/core";

type ITextAreaProp = TextareaProps & {
  className?: string;
};

export default function BaseTextArea(props: ITextAreaProp) {
  const { className, ...other } = props;
  return (
    <Textarea
      classNames={{
        input:
         `bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 mb-4 ${className}`,
      }}
      {...other}
    ></Textarea>
  );
}
