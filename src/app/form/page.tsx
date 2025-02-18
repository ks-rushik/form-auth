import InputFormField from "../components/forms/InputFormField";
import Textareaformfield from "../components/forms/TextAreaField";

export default function Formfield() {
  return (
    <>
      <InputFormField
        label="Email"
        placeholder="Enter the Email.."
        error="Email is required"
      />
      <Textareaformfield
        label="Enter Description"
        placeholder="Enter the Description.."
        error="Description is required"
      />
    </>
  );
}
