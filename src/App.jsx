import { useContext, useState } from "react";
import Logo from "./components/Logo";
import Stepper from "./components/Stepper";
import StepBody from "./components/StepBody";
import { StepsContext } from "./context/stepsContext";
import stepsData from "@src/data/steps";

function App() {
	const [step] = useContext(StepsContext);
	const stepData = stepsData[step];
	const StepHeader = stepData.header;
	return (
		<div className="flex flex-col items-center justify-center h-screen px-3">
			<div className="flex flex-col items-center justify-center w-full h-full">
				<header className="flex items-center justify-center w-full">
					<Logo />
					<span className="text-3xl font-bold">Eden</span>
				</header>
				<main className="flex flex-col items-center justify-center w-full">
					<div className="flex flex-col items-center w-full">
						<Stepper />
						<StepHeader title={stepData.title} subtitle={stepData.subtitle} />
					</div>
					<StepBody />
				</main>
			</div>
		</div>
	);
}

export default App;
