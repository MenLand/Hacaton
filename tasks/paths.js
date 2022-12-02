const { basename, resolve } = require('path');

exports.paths = {
	srcFolder: './src',
	buildFolder: './build',
	rootFolder: basename(resolve()),
};
