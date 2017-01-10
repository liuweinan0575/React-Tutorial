module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public)/,
		loader: "babel",
		query: {
			cacheDirectory: true,
			plugins: [
			'transform-runtime',
			'transform-decorators-legacy'
			],
			presets: ['es2015', 'react', 'stage-0']
		}
	}
];
