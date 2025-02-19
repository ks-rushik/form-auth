import BaseLabel from "./components/ui/BaseLabel";
import BaseTextArea from "./components/ui/BaseTextArea";
import BaseInput from "./components/ui/BaseInput";
import BaseSelect from "./components/ui/BaseSelect";
import BaseCheckBox from "./components/ui/BaseCheckBox";
import BaseRadio from "./components/ui/BaseRadio";
import BaseButton from "./components/ui/BaseButton";
import BaseErrorMessage from "./components/ui/BaseErrorMessage";

export default function Home() {
  return (
    <>
      <BaseLabel
        labeltitle="This is required field"
        className="!text-blue-700"
      ></BaseLabel>
      <BaseTextArea
        label="This is Text area"
        placeholder="Input placeholder"
      ></BaseTextArea>
      <BaseInput placeholder="Enter the Value.." disabled={false} classNames={{input:"bg-blue-400"}}  />
      <BaseSelect
        label="Your favorite library"
        placeholder="Pick value"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "vue", label: "Vue", disabled: true },
          { value: "svelte", label: "Svelte", disabled: true },
        ]}
      />
      <BaseCheckBox label="I agree to sell my privacy" />
      <BaseRadio
        label="I cannot be unchecked"
        classNames={{
          label: "text-yellow-400",
          radio: " text-sm font-medium text-gray-900 dark:text-gray-300",
        }}
      />
      <BaseButton>Button</BaseButton>
      <BaseErrorMessage
        statusCode={404}
        title="Page Not Found"
        className="text-red-500"
      />
    </>
  );
}
