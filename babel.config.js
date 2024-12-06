module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@icons': './src/assets/icons',
					'@theme': './src/types',
					'@components': './src/components',
					'@services': './src/types',
					'@utils': './src/utils',
				},
			},
		],
	],
}
