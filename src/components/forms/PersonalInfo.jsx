import { useContext, useState, useEffect, useCallback } from "react";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { FormContext } from "../../context/FormContext";

const PersonalInfo = () => {
  const { formData, setFormData, handleNext, handleBack } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateData = useCallback(() => {
    let newErrors = {};

    if (
      !formData.firstName ||
      formData.firstName.length < 2 ||
      formData.firstName.length > 50 ||
      !/^[A-Za-z]+$/.test(formData.firstName)
    ) {
      newErrors.firstName =
        "First name must be between 2 and 50 characters and contain only alphabets.";
    }

    if (formData.lastName && !/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must contain only alphabets.";
    }

    if (!formData.address || formData.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.address, formData.firstName, formData.lastName]);

  useEffect(() => {
    validateData();
  }, [formData, validateData]);

  const handleNextStep = () => {
    if (validateData()) {
      handleNext();
    }
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
        error={formData.firstName && errors.firstName}
      />
      <TextField
        value={formData.lastName}
        label="Last Name"
        placeholder="Enter your Last Name"
        onChange={handleChange}
        name="lastName"
        type="text"
        required={false}
        error={formData.lastName && errors.lastName}
      />
      <TextField
        value={formData.address}
        label="Address"
        placeholder="Enter your Address"
        onChange={handleChange}
        name="address"
        type="text"
        required={true}
        error={formData.address && errors.address}
      />
      <div className="mt-4 flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNextStep} disabled={Object.keys(errors).length > 0}>
          Save & Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
