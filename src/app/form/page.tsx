import FormField from "../components/forms/FormField";
import FormGroup from "../components/forms/FormGroup";
import BaseInput from "../components/ui/BaseInput";
import BaseSelect from "../components/ui/BaseSelect";
import BaseTextArea from "../components/ui/BaseTextArea";

const FormFieldsPage = () => {
  return (
    <FormGroup>
      <FormField label="Email" name="email" error="email is required">
        <BaseInput placeholder="Enter your email..." className="w-64" />
      </FormField>
      <FormField label="Description" name="description" error="Description is required">
        <BaseTextArea placeholder="write something..." className="w-64" />
      </FormField>
      <FormField label="Category" name="select" error="Select one field">
        <BaseSelect data={["React", "Angular", "Vue", "Svelte"]}  className="w-64" />
      </FormField>
    </FormGroup>
  );
}

export default FormFieldsPage
