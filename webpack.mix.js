const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/assets/scss/pages/home/home.scss', 'public/css');
mix.sass('resources/assets/admin/scss/pages/admin_dashboard.scss', 'public/css_admin');

mix.js('resources/assets/js/pages/home/home.js', 'public/js');
mix.js('resources/assets/admin/js/pages/admin_dashboard.js', 'public/js_admin');



mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],

});
