import React from "react";
import { PropTypes } from "prop-types";
import { Icon } from "@iconify/react";

const Stepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="relative mb-8 mt-4 flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className="relative z-10 flex cursor-pointer flex-row items-center justify-center gap-2"
            onClick={() => onStepClick(index)}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full text-white transition-colors duration-300 ${
                index <= currentStep ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              {index < currentStep ? <Icon icon="ic:baseline-done-all" /> : <p>{index + 1}</p>}
            </div>
            <div
              className={`transition-colors duration-300 ${
                index <= currentStep ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="relative z-0 mx-2 h-0.5 flex-grow bg-gray-300">
              <div
                className="h-0.5 bg-blue-500 transition-all duration-300"
                style={{
                  width: index < currentStep ? "100%" : "0%",
                }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func.isRequired,
};

export default Stepper;
