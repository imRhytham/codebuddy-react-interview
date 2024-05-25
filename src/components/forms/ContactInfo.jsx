import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import PhoneInputWithCountryCode from "../ui/PhoneInput";

const ContactInfo = () => {
  const { formData, setFormData, handleBack, handleSubmit } = useContext(FormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex w-[50%] flex-col  gap-5">
      <PhoneInputWithCountryCode />
      <div className="flex-inline flex space-x-4">
        <input type="checkbox" />
        <p>Accept Terms And Condition</p>
      </div>
      <div className="mt-4 flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default ContactInfo;
