const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .styles([
    'resources/css/font-awesome.min.css',
    'resources/css/photon/main.css',
    'resources/css/portfolio/main.css',
  ], 'public/css/main.css')
  .styles([
    'resources/css/photon/noscript.css',
  ], 'public/css/photon/noscript.css')
  .copyDirectory('resources/fonts', 'public/fonts')
  .copyDirectory('resources/images', 'public/images');
