import { useCallback, useContext, useEffect, useState } from "react";
import Button from "../ui/Button";
import { FormContext } from "../../context/FormContext";
import PhoneInputWithCountryCode from "../ui/PhoneInput";

const ContactInfo = () => {
  const { formData, setFormData, handleBack, handleSubmit } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handlePhoneChange = (phoneNumber) => {
    setFormData({ ...formData, phoneNumber });
  };

  const handleCountryCodeChange = (countryCode) => {
    setFormData({ ...formData, countryCode });
  };
  const validateData = useCallback(() => {
    let newErrors = {};

    if (
      !formData.phoneNumber ||
      formData.phoneNumber.length !== 10 ||
      !/^\d{10}$/.test(formData.phoneNumber)
    ) {
      newErrors.phoneNumber = "Phone number must be a 10 digit number.";
    }

    if (!formData.acceptTermsAndCondition) {
      newErrors.acceptTermsAndCondition = "You must accept the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.acceptTermsAndCondition, formData.phoneNumber]);

  useEffect(() => {
    validateData();
  }, [formData, validateData]);

  const handleFormSubmit = () => {
    if (validateData()) {
      handleSubmit();
    }
  };

  return (
    <div className="flex w-[50%] flex-col gap-5">
      <PhoneInputWithCountryCode
        phoneNumber={formData.phoneNumber}
        countryCode={formData.countryCode}
        onPhoneNumberChange={handlePhoneChange}
        onCountryCodeChange={handleCountryCodeChange}
        error={formData.phoneNumber && errors.phoneNumber}
      />
      <div className="flex-inline flex items-center space-x-4">
        <input
          type="checkbox"
          name="acceptTermsAndCondition"
          value={formData.acceptTermsAndCondition}
          onChange={handleChange}
        />
        <p>Accept Terms And Condition</p>
      </div>
      {errors.acceptTermsAndCondition && (
        <p className="text-xs text-red-500">{errors.acceptTermsAndCondition}</p>
      )}
      <div className="mt-4 flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleFormSubmit} disabled={Object.keys(errors).length > 0}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
