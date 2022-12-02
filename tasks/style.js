const browserSync = require('browser-sync');
const { dest, src } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const GulpCleanCss = require('gulp-clean-css');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const gulpIf = require('gulp-if');
const gulpShorthand = require('gulp-shorthand');
const gulpGroupCssMediaQueries = require('gulp-group-css-media-queries');
const { isProd } = require('./isProd');
const { paths } = require('./paths');
const rename = require('gulp-rename');
const size = require('gulp-size');
const gulpWebpCss = require('gulp-webp-css');
const sassGlob = require('gulp-sass-glob');
const mainSass = gulpSass(sass);

exports.style = style = () =>
	src(`${paths.srcFolder}/scss/**/*.scss`, { sourcemaps: !isProd() })
		.pipe(sassGlob())
		.pipe(mainSass())
		.pipe(autoPrefixer())
		.pipe(gulpIf(isProd(), size({ title: 'HTML: Before compression' })))
		.pipe(gulpIf(isProd(), gulpShorthand()))
		.pipe(gulpIf(isProd(), gulpGroupCssMediaQueries()))
		.pipe(gulpIf(isProd(), GulpCleanCss({ level: 2 })))
		.pipe(gulpIf(isProd(), gulpWebpCss()))
		.pipe(gulpIf(isProd(), size({ title: 'HTML: After compression' })))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(`${paths.buildFolder}/css`, { sourcemaps: '.' }))
		.pipe(browserSync.stream());
