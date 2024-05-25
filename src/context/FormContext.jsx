import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext(null);

const steps = ["Account Details", "Personal Info", "Contact"];

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = useCallback(
    (stepIndex) => {
      if (stepIndex <= currentStep) {
        setCurrentStep(stepIndex);
      }
    },
    [currentStep],
  );

  const handleNext = useCallback((data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        handleBack,
        handleNext,
        handleStepClick,
        steps,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FormContext, FormContextProvider };
