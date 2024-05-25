import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const PersonalInfo = () => {
  const { formData, setFormData, handleNext, handleBack } = useContext(FormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex w-[50%] flex-col gap-5">
      <TextField
        value={formData.firstName}
        label="First Name"
        placeholder="Enter your First Name"
        onChange={handleChange}
        name="firstName"
        type="text"
        required={true}
      />
      <TextField
        value={formData.lastName}
        label="Last Name"
        placeholder="Enter your Last Name"
        onChange={handleChange}
        name="lastName"
        type="text"
        required={false}
      />
      <TextField
        value={formData.address}
        label="Address"
        placeholder="Enter your Address"
        onChange={handleChange}
        name="address"
        type="text"
        required={true}
      />
      <div className="mt-4 flex justify-between">
        <Button disabled={false} onClick={handleBack}>
          Back
        </Button>
        <Button onClick={handleNext}>Save & Next</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
