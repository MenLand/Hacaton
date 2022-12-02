const { task, series, parallel, watch } = require('gulp');
const { htmlInclude } = require('./tasks/html');
const { clean } = require('./tasks/clean');
const { style } = require('./tasks/style');
const { zip } = require('./tasks/zip');
const { svgSprite } = require('./tasks/svgSprite');
const { image } = require('./tasks/image');
const { wepbImage } = require('./tasks/wepbImage');
const { avifImage } = require('./tasks/avifImage');
const { javascript } = require('./tasks/javascript');
const { font } = require('./tasks/font');
const { paths } = require('./tasks/paths');

const browserSync = require('browser-sync');

const watcher = () => {
	browserSync.init({
		port: 8000,
		server: {
			baseDir: paths.buildFolder,
		},
	});

	watch(`${paths.srcFolder}/scss/**/*.scss`, style);
	watch(`${paths.srcFolder}/**/*.html`, htmlInclude);
	watch(`${paths.srcFolder}/images/**/**.{jpg,jpeg,png,svg}`, image);
	watch(`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`, wepbImage);
	watch(`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`, avifImage);
	watch(`${paths.srcFolder}/images/svg/**/*.svg`, svgSprite);
	watch(`${paths.srcFolder}/js/**/*.js`, javascript);
};

exports.default = series(
	clean,
	parallel(
		font,
		htmlInclude,
		style,
		image,
		wepbImage,
		avifImage,
		svgSprite,
		javascript
	),
	watcher
);

task('zip', zip);
task('style', style);
task('font', font);
task('clean', clean);
