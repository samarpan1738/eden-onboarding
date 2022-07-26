import React, { useContext, useEffect, useRef } from "react";
import SubmitButton from "../components/SubmitButton";
import { StepsContext } from "../context/StepsContext";
import { UserContext } from "../context/UserContext";
const useCasesData = [
	{
		heading: "For myself",
		text: "Write better. Think more clearly.Stay organised",
		value: "for-myself",
		icon: (
			<svg
				height="1.25rem"
				class="block fill-current transition duration-200"
				viewBox="16.429 4.548 167.3 182.853"
			>
				<path d="M88.12854 5.401764c-13.2 2.7-28.8 14.8-34.9 27.4-8.5 17.4-8.4 33.2.4 50.3 2.8 5.5 12 15.4 17.9 19.1 11.6 7.5 28.3 10.1 41.7 6.7 18.1-4.7 33.3-19.9 38.1-37.8 1.8-7 1.8-20.5-.2-28.1-4.5-17.4-19.9-32.4-38.1-37.1-6.1-1.6-18.1-1.8-24.9-.5zm-.1 116c-31.1 3.9-55.3 19.1-66.5 41.7-3.5 7.1-4.2 9.5-4.6 16.3l-.5 8h167.3v-4.3c0-16.7-12.1-35.5-30.4-47.5-17.1-11.1-43.5-16.9-65.3-14.2z"></path>
			</svg>
		),
	},
	{
		heading: "With my team",
		text: "Wikis, docs, tasks & projects, all in one place.",
		value: "with-my-team",
		icon: (
			<svg height="1.25rem" class="block fill-current transition duration-200" viewBox="11.8 9.068 95.2 93.932">
				<path d="M50.7 11.1c-2 1.1-4.9 3.8-6.4 5.9-8.2 12.6.5 29 15.4 29 6.3 0 9.9-1.6 14-6.4 6-6.7 6.7-15.4 1.8-22.7-4.8-7.3-16.7-10.1-24.8-5.8zM23.5 38.8c-5.5 3.5-7.4 8.1-5.5 13.8 3.3 9.8 18 10.1 22 .5 4-9.8-7.7-19.9-16.5-14.3zm61.7-.1C74.9 43.8 78.6 60 90.1 60c5.3 0 9.3-2.2 10.9-6 2.8-6.7.5-13-5.5-15.6-4.4-1.8-6.2-1.7-10.3.3zM54 51.9C47.1 54 41.9 58.4 38.4 65c-1.6 2.9-1.9 6.3-2.2 20.7l-.4 17.3H83V85.8c0-15.4-.2-17.6-2.1-21.5C76.3 54.7 63.7 49 54 51.9zm-33.6 16c-1.7 1-4.2 3.6-5.5 5.7-2.1 3.5-2.4 5.3-2.8 16.6l-.3 12.8h15.1l.3-18.5c.3-17.9.2-18.5-1.7-18.5-1.1 0-3.4.9-5.1 1.9zm72 .3c.3 1.3.6 9.6.6 18.5V103h14V90.5c0-10.5-.3-13.2-2-16.4-2.1-4.2-7.4-8.1-11-8.1-1.8 0-2.1.4-1.6 2.2z"></path>
			</svg>
		),
	},
];

function UseCases() {
	const [step, setStep] = useContext(StepsContext);
	const [user, setUser] = useContext(UserContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		setUser({
			...user,
			useCase: fd.get("use-case"),
		});
		setStep((step) => step + 1);
	};

	return (
		<form className="w-full" name="use-case" onSubmit={handleSubmit}>
			<fieldset className="flex justify-between">
				{useCasesData.map((useCase, idx) => {
					return (
						<div>
							<input
								type="radio"
								name="use-case"
								id={useCase.value}
								value={useCase.value}
								className="hidden peer"
								defaultChecked={idx === 0 ? true : false}
							/>
							<label
								htmlFor={useCase.value}
								className="border border-gray-200 w-[12rem] rounded-md flex flex-col px-5 py-7 peer-checked:text-primary peer-checked:border peer-checked:border-primary transition-all ease-in-out"
							>
								<div className={`pl-2 mb-6  text-inherit`}>{useCase.icon}</div>
								<h2 className="w-full mb-2 font-bold text-gray-700">{useCase.heading}</h2>
								<p className="w-full text-sm text-gray-500">{useCase.text}</p>
							</label>
						</div>
					);
				})}
			</fieldset>
			<SubmitButton label={"Create Workspace"} />
		</form>
	);
}

export default UseCases;
