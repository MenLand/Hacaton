const browserSync = require('browser-sync');
const { dest, src } = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const gulpIf = require('gulp-if');
const { isProd } = require('./isProd');
const { paths } = require('./paths');
const rename = require('gulp-rename');
const size = require('gulp-size');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');

const plugins = [
	require('css-has-pseudo')(),
	require('autoprefixer')(),
	require('@hail2u/css-mqpacker')(), // Group media queries
];

if (isProd()) {
	plugins.push(
		require('cssnano')({
			preset: 'default',
		})
	);
}

exports.style = style = () =>
	src(`${paths.srcFolder}/scss/styles.scss`, { sourcemaps: !isProd() })
		.pipe(sassGlob())
		.pipe(gulpSass(sass)())
		.pipe(gulpIf(isProd(), size({ title: 'CSS: Before compression' })))
		.pipe(postcss(plugins))
		.pipe(gulpIf(isProd(), size({ title: 'CSS: After compression' })))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(`${paths.buildFolder}/css`, { sourcemaps: '.' }))
		.pipe(browserSync.stream());
