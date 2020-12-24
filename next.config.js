const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

const nextConfig = {
  // Trailing Slash Routes
  trailingSlash: false,

  /* 
  @@
  @@  Webpack Config 
  @@  
  */
  webpack: (config) => {
    /* 
    @@  
    @@  DECLARE ALIAS
    @@    - COMPONENTS ALIAS
    @@    - ENVIRONMENT ALIAS
    @@    - MODULE AND HELPER ALIAS
    @@    - SRC
    @@    - MEDIA ALIAS
    @@  
    */
    config.resolve.alias['@sandika_components'] = path.join(__dirname, 'vendor/components');
    config.resolve.alias['@sandika_environment'] = path.join(__dirname, 'vendor/environment');
    config.resolve.alias['@sandika_modules'] = path.join(__dirname, 'vendor/modules');
    config.resolve.alias['@sandika_styles'] = path.join(__dirname, 'vendor/styles');
    config.resolve.alias['@sandika_src'] = path.join(__dirname, 'src');
    config.resolve.alias['@public/media'] = path.join(__dirname, 'public/media');

    /*
    @@  
    @@  SVG LOADER
    @@  
    */
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [{ loader: '@svgr/webpack' }]
    });

    /*
    @@  
    @@  PNG, GIF, JPG|JPEG IMAGE FORMAT
    @@  EOT, TTF, WOFF, WOFF2 FONT FORMAT
    @@  LOADER
    @@  
    */
    config.module.rules.push({
      test: /\.(png|jpeg|jpg|gif|eot|ttf|woff|woff2)$/,
      use: [{ loader: 'file-loader' }, { loader: 'url-loader' }]
    });

    /*
    @@  
    @@  It used to handle warning conflict between order
    @@  module.scss and empty style.css on development mode
    @@  
    */
    process.env.NODE_ENV !== 'production' &&
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
        })
      );

    return config;
  }
};

module.exports = withPlugins(
  [
    [withSourceMaps],
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: process.env.NODE_ENV === 'production' ? 'sdk_[hash:base64:10]' : '[local]'
        }
      }
    ],
    [
      withCSS,
      {
        cssModules: false
      }
    ]
  ],
  nextConfig
);
