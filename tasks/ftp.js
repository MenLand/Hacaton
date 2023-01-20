const { src } = require('gulp');
const { paths } = require('./paths');
const ftpConnector = require('vinyl-ftp');
const gutil = require('gulp-util');

exports.ftp = ftp = () => {
	const ftpConnect = ftpConnector.create({
		host: 'rudy.zzz.com.ua',
		user: 'MenLand',
		parallel: 5,
		password: 'Drik1234',
		log: gutil.log,
	});
	return src(`${paths.buildFolder}/**/*.*`).pipe(
		ftpConnect.dest(`/${'menland.zzz.com.ua'}/${paths.rootFolder}`)
	);
};
