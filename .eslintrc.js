module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		//vue
		//'plugin:vue/vue3-essential'
		'plugin:vue/vue3-strongly-recommended',
		// 'plugin:vue/vue3-recommended'

		//js
		'eslint:recommended',
	],
	parser: '@babel/eslint-parser',
	rules: {
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'never',
			},
		],
	},
};
