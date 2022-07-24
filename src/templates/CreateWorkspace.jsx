import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "@src/context/StepsContext";
import TextField from "@src/components/TextField";
import SubmitButton from "../components/SubmitButton";
import { UserContext } from "../context/UserContext";

function CreateWorkspace() {
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
		setUser({
			...user,
			workspace: { name: fd.get("workspace-name"), url: fd.get("workspace-url") },
		});
		// Increment Step
		setStep((step) => step + 1);
	};
	return (
		<form className="w-full" onSubmit={handleSubmit}>
			<div className="flex flex-col mb-6">
				<label htmlFor="workspace-name" className="pb-2 text-sm text-gray-800">
					Workspace name
				</label>
				{/* <input ref={firstInputRef} id="full-name" type="text" placeholder='Eden' className='border rounded-md w-full px-3.5 py-3 text-gray-600 text-sm focus:outline-primary' required /> */}
				<TextField
					ref={firstInputRef}
					id="workspace-name"
					name="workspace-name"
					placeholder="Eden"
					required={true}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="workspace-url" className="pb-2 text-sm text-gray-800">
					Workspace URL (optional)
				</label>
				<div className="flex text-gray-600 border rounded-md focus-within:outline-primary focus-within:outline focus-within:outline-2 focus-within:hover:outline-primary focus-within:hover:outline focus-within:hover:outline-2 hover:outline-gray-500 hover:outline-[0.5px] hover:outline">
					<span className="flex items-center px-3.5 py-3 text-sm bg-gray-50 border-r">www.eden.com/</span>
					<input
						id="workspace-url"
						type="text"
						placeholder="Example"
						className="w-full px-3.5 py-3 text-gray-600 text-sm focus:outline-none rounded-md"
						required={false}
						name="workspace-url"
					/>
				</div>
			</div>
			<SubmitButton label={"Create Workspace"} />
		</form>
	);
}

export default CreateWorkspace;
