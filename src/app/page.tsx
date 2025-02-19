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
        className="text-blue-700"
      ></BaseLabel>
      <BaseTextArea
        label="This is Text area"
        placeholder="Input placeholder"
      ></BaseTextArea>
      <BaseInput
        placeholder="Enter the Value.."
        className= "bg-blue-300 placeholder-red-900 "
      />
      <BaseSelect
        label="Your favorite library"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <BaseCheckBox label="I agree to sell my privacy" />
      <BaseRadio label="I cannot be unchecked" />
      <BaseButton>Button</BaseButton>
      <BaseErrorMessage
        statusCode={404}
        title="Page Not Found"
        className="text-red-500"
      />
    </>
  );
}
