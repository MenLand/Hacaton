const del = require('del');
const { dest, src } = require('gulp');
const GulpZip = require('gulp-zip');
const { paths } = require('./paths');

exports.zip = zip = () =>
	src(`${paths.buildFolder}/**/*.*`, {})
		.pipe(del.sync([`${paths.buildFolder}/*.zip`]))
		.pipe(GulpZip(`${paths.rootFolder}.zip`))
		.pipe(dest(paths.buildFolder));
