import React, { useContext } from "react";
import { StepsContext } from "../../context/stepsContext";
import stepsData from "../../data/steps";
const MAXIMUM_STEPS = stepsData.length;

function Stepper() {
	const [step] = useContext(StepsContext);
	return (
		<div className="flex items-center justify-center mt-[5rem]">
			{[...Array(MAXIMUM_STEPS).keys()].map((val, idx) => (
				<>
					{idx > 0 && (
						<div
							className={`w-8 h-[0.09rem] transition-all ease-in-out  duration-200 ${
								idx <= step ? "bg-primary bg-[100%]" : "bg-gray-300 bg-[0%]"
							}`}
						></div>
					)}
					<div
						className={`w-10 h-10 transition-all ease-in-out duration-200 delay-100 rounded-full flex justify-center items-center border-[0.1rem] ${
							idx <= step
								? "bg-primary text-white border-primary bg-[100%]"
								: "bg-white text-[#515C77] border-gray-200 bg-[0%]"
						}`}
					>
						{idx + 1}
					</div>
					{idx < MAXIMUM_STEPS - 1 && (
						<div
							className={`w-8 h-[0.09rem] transition-all ease-in-out duration-200 delay-200 ${
								idx <= step ? "bg-primary bg-[100%]" : "bg-gray-300 bg-[0%]"
							}`}
						></div>
					)}
				</>
			))}
		</div>
	);
}

export default Stepper;
