const del = require('del');
const { dest, src } = require('gulp');
const GulpZip = require('gulp-zip');
const { paths } = require('./paths');

exports.zip = zip = () => {
	del.sync(`${paths.buildFolder}/*.zip`);
	return src(`${paths.buildFolder}/**/*.*`, {})
		.pipe(GulpZip(`${paths.rootFolder}.zip`))
		.pipe(dest('./'));
};
