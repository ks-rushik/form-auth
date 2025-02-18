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
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      }}
      {...other}
    ></Textarea>
  );
}
