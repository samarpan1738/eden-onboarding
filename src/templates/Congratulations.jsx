import React, { useContext } from "react";
import SubmitButton from "../components/SubmitButton";
import { UserContext } from "../context/UserContext";

function Congratulations() {
	const [user] = useContext(UserContext);
	console.log("user : ", user);
	return (
		<div className="w-full">
			<SubmitButton label={"Launch Eden"} className="mt-0" />
		</div>
	);
}

export default Congratulations;
