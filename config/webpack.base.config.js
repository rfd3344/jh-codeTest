const path = require('path');
const webpack = require('webpack');

const entryConfig = {
	main: path.resolve(__dirname, '../src/index.jsx'),
};

const outputConfig = {
	filename: './dist/[name].bundle.js',
	path: path.resolve(__dirname, '../public/'),
	publicPath: '/',
};

const moduleConfig = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			],
		},
		{
			test: /\.(less|css)$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'less-loader' },
			],
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [{ loader: 'file-loader' }],
		},
	],
};

const resolveConfig = {
	alias: {
		_src: path.resolve(__dirname, '../src/'),
		_layout: path.resolve(__dirname, '../src/layout'),
		_views: path.resolve(__dirname, '../src/views'),
		_utilis: path.resolve(__dirname, '../src/utilis'),
		_helper: path.resolve(__dirname, '../src/helper'),
		_static: path.resolve(__dirname, '../src/static'),
		_actions: path.resolve(__dirname, '../src/actions'),
		_reducers: path.resolve(__dirname, '../src/reducers'),
		_tests: path.resolve(__dirname, '../tests'),
		_testData: path.resolve(__dirname, '../tests/testData'),
		_testHelper: path.resolve(__dirname, '../tests/testHelper'),
	},
};

const performanceConfig = {
	hints: 'warning',
	maxEntrypointSize: 4000000,
	maxAssetSize: 4000000,
};

const pluginsConfig = [
	new webpack.NamedModulesPlugin(),
];

module.exports = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	performance: performanceConfig,
	plugins: pluginsConfig,
};
