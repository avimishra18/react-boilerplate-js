module.exports = function(api) {
	api.cache(false);

	const presets = [
		[
			"@babel/preset-env",
		],
		"@babel/preset-react"
	];
	const plugins = [];

	// For React HMR
	const sourceType = "unambiguous";
	return { presets, plugins, sourceType };
};
