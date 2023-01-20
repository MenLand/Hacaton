const { task, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync');
const { ftp } = require('./tasks/ftp');
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
// const fs = require('fs');

const watcher = () => {
	browserSync.init({
		port: 8000,
		server: {
			baseDir: paths.buildFolder,
		},
		// snippetOptions: {
		// 	rule: {
		// 		match: /<\/head>/i,
		// 		fn: function (snippet) {
		// 			return (
		// 				snippet +
		// 				String(
		// 					fs.readFileSync(
		// 						'./browserSyncSnippets/scroller.html'
		// 					)
		// 				)
		// 			);
		// 		},
		// 	},
		// },
	});

	watch(`${paths.srcFolder}/scss/**/*.scss`, style);
	watch(`${paths.srcFolder}/**/*.html`, htmlInclude);
	watch(`${paths.srcFolder}/images/**/**.{jpg,jpeg,png,svg}`, image);
	watch(`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`, wepbImage);
	watch(`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`, avifImage);
	watch(`${paths.srcFolder}/images/svg/**/*.svg`, svgSprite);
	watch(`${paths.srcFolder}/js/**/*.js`, javascript);
};

const build = series(
	clean,
	font,
	htmlInclude,
	style,
	javascript,
	image,
	wepbImage,
	avifImage,
	svgSprite
);

task('build', build);
task('zip', series(build, zip));
task('style', series(clean, style));
task('script', series(clean, javascript));
task('font', series(clean, font));
task('image', series(clean, image));
task('webp', series(clean, wepbImage));
task('svg', series(clean, svgSprite));
task('clean', clean);
task('html', series(htmlInclude, style));
task('ftp', ftp);

task('deploy', series(clean, build, ftp));

exports.default = series(
	clean,
	parallel(
		font,
		htmlInclude,
		style,
		javascript,
		image,
		wepbImage,
		avifImage,
		svgSprite
	),
	watcher
);
