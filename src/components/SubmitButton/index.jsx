import React from "react";
import { twMerge } from "tailwind-merge";

function SubmitButton(props) {
	return (
		<button
			type="submit"
			className={`${twMerge(
				"w-full p-3 mt-6 text-sm text-white rounded-md bg-primary hover:bg-[#4D2FE0] focus:bg-[#4D2FE0] focus:outline-none",
				props.className
			)}`}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
}

export default SubmitButton;
