import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
function GenericStepHeader(props) {
	return (
		<div className={twMerge("flex flex-col items-center justify-center w-full mt-[5rem] mb-12", props.className)}>
			<h1 className="text-[1.8rem] font-bold mb-3">{props.title}</h1>
			<p className="text-gray-500">{props.subtitle}</p>
		</div>
	);
}

export default GenericStepHeader;
