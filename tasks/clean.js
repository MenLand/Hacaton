const del = require('del');
const { paths } = require('./paths');

exports.clean = clean = () => del(paths.buildFolder);
