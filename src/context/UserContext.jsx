import { createContext, useState } from "react";

const initialState = { fullName: "", displayName: "", workspace: { name: "", url: "" }, useCase: "" };

export const UserContext = createContext(initialState);
export function UserContextProvider({ children }) {
	const userState = useState(initialState);
	return <UserContext.Provider value={userState}>{children}</UserContext.Provider>;
}
