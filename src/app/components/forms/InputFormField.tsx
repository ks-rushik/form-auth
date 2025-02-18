import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseInput from "../ui/BaseInput";
import BaseLabel from "../ui/BaseLabel";

type IInputFormFieldProps = {
  label?: string;
  error?: string;
  placeholder?: string;
};

export default function FormField({
  label,
  error,
  placeholder,
}: IInputFormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <BaseLabel labeltitle={label!} className="text-gray-700" />
      <BaseInput placeholder={placeholder} />
      <BaseErrorMessage
        title={error}
        statusCode={404}
        className="text-red-500 text-sm"
      />
    </div>
  );
}
