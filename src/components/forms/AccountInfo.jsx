import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const AccountInfo = () => {
  const { formData, setFormData, handleNext } = useContext(FormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex w-[50%] flex-col gap-5">
      <TextField
        value={formData.email}
        label="Email Address"
        placeholder="Enter your Email Address"
        onChange={handleChange}
        name="email"
        type="email"
        required={true}
      />
      <TextField
        value={formData.password}
        label="Password"
        placeholder="Enter your Password"
        onChange={handleChange}
        name="password"
        type="password"
        required={true}
      />
      <div className="mt-4 flex justify-between">
        <Button disabled={true}>Back</Button>
        <Button onClick={handleNext}>Save & Next</Button>
      </div>
    </div>
  );
};

export default AccountInfo;
