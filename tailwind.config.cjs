/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			current: "currentColor",
			primary: {
				DEFAULT: "#644CE5",
			},
		},
		fontFamily: { sans: ["Inter", ...defaultTheme.fontFamily.sans] },
	},
	plugins: [],
};
