import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "@src/context/stepsContext";
import TextField from "@src/components/TextField";
import SubmitButton from "../components/SubmitButton";
import { UserContext } from "../context/UserContext";
function Welcome() {
	const [step, setStep] = useContext(StepsContext);
	const [user, setUser] = useContext(UserContext);

	const firstInputRef = useRef(null);
	useEffect(() => {
		firstInputRef.current.focus();
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		// Save answers
		// Increment Step
		setUser({
			...user,
			fullName: fd.get("full-name"),
			displayName: fd.get("display-name"),
		});
		setStep((step) => step + 1);
	};
	return (
		<form className="w-full" onSubmit={handleSubmit}>
			<div className="flex flex-col mb-6">
				<label htmlFor="full-name" className="pb-2 text-sm text-gray-800">
					Full Name
				</label>
				{/* <input ref={firstInputRef} id="full-name" type="text" placeholder='Steve Jobs' className='border rounded-md w-full px-3.5 py-2.5 text-gray-600 text-sm focus:outline-primary' required /> */}
				<TextField
					ref={firstInputRef}
					id="full-name"
					name="full-name"
					placeholder="Steve Jobs"
					required={true}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="display-name" className="pb-2 text-sm text-gray-800">
					Display Name
				</label>
				{/* <input id="display-name" type="text" placeholder='display-name' className='border rounded-md w-full px-3.5 py-2.5 text-gray-600 text-sm focus:outline-primary' required /> */}
				<TextField id="display-name" placeholder="Steve" required={true} name="display-name" />
			</div>
			<SubmitButton label={"Create Workspace"} />
		</form>
	);
}

export default Welcome;
