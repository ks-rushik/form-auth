import FormField from "../components/forms/FormField";
import FormGroup from "../components/forms/FormGroup";
import BaseInput from "../components/ui/BaseInput";
import BaseSelect from "../components/ui/BaseSelect";
import BaseTextArea from "../components/ui/BaseTextArea";

export default function FormFieldsPage() {
  return (
    <FormGroup>
      <FormField
        label="Email"
        name="email"
        classNames={{input:"w-64"}}
        component={BaseInput}
        placeholder="Enter your email..."
        error="email is required"
      />
      <FormField
        label="Description"
        name="description"
        classNames={{input:"w-64"}}
        component={BaseTextArea}
        placeholder="Write something..."
        error="description is required"
      />
      <FormField
        label="Category"
        name="category"
        component={BaseSelect}
        classNames={{input:"w-64"}}
        data={["React", "Angular", "Vue", "Svelte"]}
        error="category is required"
      />
    </FormGroup>
  );
}
