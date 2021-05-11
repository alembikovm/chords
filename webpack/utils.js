const path = require('path');

exports.resolve = (...pathSegments) => path.resolve(process.cwd(), ...pathSegments);

exports.isDevelopment = process.env.NODE_ENV === 'development';
