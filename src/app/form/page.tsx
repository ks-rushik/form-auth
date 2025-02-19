import FormField from "../components/forms/FormField";
import BaseInput from "../components/ui/BaseInput";
import BaseSelect from "../components/ui/BaseSelect";
import BaseTextArea from "../components/ui/BaseTextArea";

export default function FormFieldsPage() {
  return (
    <>
      <FormField
        label="Email"
        component={BaseInput}
        placeholder="Enter your email..."
        error="Email is required"
      />

      <FormField
        label="Description"
        component={BaseTextArea}
        placeholder="Write something..."
        error="Description cannot be empty"
      />
      <FormField
        label="Category"
        component={BaseSelect}
        data={["React", "Angular", "Vue", "Svelte"]}
        error="Please select a category"
      />
    </>
  );
}
