import React, { useContext } from "react";
import GenericStepHeader from "@src/components/GenericStepHeader";
import { UserContext } from "@src/context/UserContext";
import "./index.css"
function CongratulationsHeader() {
	const [user] = useContext(UserContext);
	const title = `Congratulations, ${user.displayName}`;
	const subtitle = "You have completed onboarding, you can start using the Eden!";

	return (
		<>
			<div className="mt-[5rem] complete-check-mark"></div>
			<GenericStepHeader title={title} subtitle={subtitle} className="mt-[2rem] mb-7" />
		</>
	);
}

export default CongratulationsHeader;
