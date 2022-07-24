import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StepsContextProvider } from "./context/StepsContext";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StepsContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</StepsContextProvider>
	</React.StrictMode>
);
