import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseLabel from "../ui/BaseLabel";
import BaseTextArea from "../ui/BaseTextArea";

type ITextFormFieldProps = {
  label?: string;
  error?: string;
  placeholder?: string;
};

export default function Textareaformfield({
  label,
  error,
  placeholder,
}: ITextFormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <BaseLabel labeltitle={label!} className="text-gray-700" />
      <BaseTextArea
        placeholder={placeholder}
      ></BaseTextArea>
      <BaseErrorMessage
        title={error}
        statusCode={404}
        className="text-red-500 text-sm"
      />
    </div>
  );
}
