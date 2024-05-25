import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import { rest } from "msw";

const FormContext = createContext(null);

const steps = ["Account Details", "Personal Info", "Contact"];

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    const reqBody = { ...formData };
    delete reqBody.acceptTermsAndCondition;
    try {
      const data = await fetch("https://codebuddy.review/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      const res = await data.json();
      if (res.message === "Success") {
        navigate("/posts");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

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
        handleSubmit,
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
