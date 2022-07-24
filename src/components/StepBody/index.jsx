import React, { useContext } from "react";
import { StepsContext } from "@src/context/StepsContext";
import stepsData from "@src/data/steps";
function StepBody() {
    const [step, setStep] = useContext(StepsContext);
    const Body = stepsData[step].body;
    console.log("step : ", step);
    return (
        <div className="w-[400px] max-w-full">
            <Body step={step} setStep={setStep} />
        </div>
    );
}

export default StepBody;
