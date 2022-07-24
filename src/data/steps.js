import Welcome from "@src/templates/Welcome";
import CreateWorkspace from "@src/templates/CreateWorkspace";
import UseCases from "@src/templates/UseCases";
import Congratulations from "@src/templates/Congratulations";
import GenericStepHeader from "@src/components/GenericStepHeader";
import CongratulationsHeader from "@src/components/CongratulationsHeader";

export default [
	{
		header: GenericStepHeader,
		title: "Welcome! First things first...",
		subtitle: "You can always change them later.",
		body: Welcome,
	},
	{
		header: GenericStepHeader,
		title: "Let's set up a home for all your work",
		subtitle: "You can always create another workspace later.",
		body: CreateWorkspace,
	},
	{
		header: GenericStepHeader,
		title: "How are you planning to use Eden?",
		subtitle: "We'll streamline your setup experience accordingly",
		body: UseCases,
	},
	{
		header: CongratulationsHeader,
		body: Congratulations,
	},
];
