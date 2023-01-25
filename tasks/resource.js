const { src, dest } = require('gulp');
const { paths } = require('./paths');

exports.resource = resource = () =>
	src(`${paths.srcFolder}/resources/**`).pipe(
		dest(`${paths.buildFolder}/resources/`)
	);
