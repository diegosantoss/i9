const withPlugins = require('next-compose-plugins');
const withPolyfill = require('next-with-polyfill');
 
module.exports = withPlugins([
  withPolyfill([
    './node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js'
  ]),
]);
