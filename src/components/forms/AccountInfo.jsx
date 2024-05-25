import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { useCallback, useContext, useEffect, useState } from "react";
import { FormContext } from "../../context/FormContext";

const AccountInfo = () => {
  const { formData, setFormData, handleNext } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateData = useCallback(() => {
    let newErrors = {};
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/;

    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const validatePassword = (password) => {
      if (!password) return false;
      let upperCaseCount = 0,
        lowerCaseCount = 0,
        digitCount = 0,
        specialCharCount = 0;
      const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

      for (let char of password) {
        if (char >= "A" && char <= "Z") upperCaseCount++;
        else if (char >= "a" && char <= "z") lowerCaseCount++;
        else if (char >= "0" && char <= "9") digitCount++;
        else if (specialChars.includes(char)) specialCharCount++;
      }

      return upperCaseCount >= 2 && lowerCaseCount >= 2 && digitCount >= 2 && specialCharCount >= 2;
    };

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must contain at least 2 capital letters, 2 small letters, 2 numbers, and 2 special characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.email, formData.password]);

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
        value={formData.email}
        label="Email Address"
        placeholder="Enter your Email Address"
        onChange={handleChange}
        name="email"
        type="email"
        error={formData.email && errors.email}
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
        error={formData.password && errors.password}
      />
      <div className="mt-4 flex justify-between">
        <Button disabled={true}>Back</Button>
        <Button onClick={handleNextStep} disabled={Object.keys(errors).length > 0}>
          Save & Next
        </Button>
      </div>
    </div>
  );
};

export default AccountInfo;
