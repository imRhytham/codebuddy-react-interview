import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import Stepper from "../ui/Stepper";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";

const Index = () => {
  const { steps, currentStep, handleStepClick } = useContext(FormContext);

  return (
    <>
      <Stepper steps={steps} currentStep={currentStep} onStepClick={handleStepClick} />
      <div className="flex items-center justify-center">
        {currentStep === 0 && <AccountInfo />}
        {currentStep === 1 && <PersonalInfo />}
        {currentStep === 2 && <ContactInfo />}
      </div>
    </>
  );
};

export default Index;
