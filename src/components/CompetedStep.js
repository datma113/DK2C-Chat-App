import React from "react";

const CompetedStep = ({ numberStep, currentStep }) => {

     const checkCurrentCompletedStep = (step) => {
          console.log(step, currentStep)
          return step <= currentStep ? "completed-step--has-completed" : ""
     }
    const stepMap = [...Array(numberStep)].map((nothing, index) => {
        return (
            <div key={index} className={` completed-step ${checkCurrentCompletedStep(index)} mb-5`}>
                {}
            </div>
        );
    });
    return <div className="d-flex">{stepMap}</div>;
};

export default CompetedStep;
