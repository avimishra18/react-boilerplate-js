const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));
module.exports = {
	parser: "babel-eslint",
	extends: [
		"airbnb",
		"prettier",
		"prettier/react",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	plugins: ["prettier", "react", "react-hooks", "jsx-a11y"],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true
	},

	rules: {
		"prettier/prettier": ["error", prettierOptions],
		"no-console": ["warn", { allow: ["error"] }]
	}
};
