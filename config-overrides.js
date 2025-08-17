const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = function override(config, env) {
  
    config.plugins.push(
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["mozjpeg", { quality: 75, progressive: true }],
              ["pngquant", { quality: [0.65, 0.9], speed: 4 }],
              ["gifsicle", { interlaced: false }],
              ["svgo", {}]
            ]
          }
        },
        generator: [
          {
            // This will be used when we import with ?as=webp
            preset: "webp",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [["webp", { quality: 75 }]]
            },
            filename: "[path][name].webp"
          }
        ]
      })
    );

    // Add a rule so Webpack knows what to do with ?as=webp requests
    config.module.rules.push({
      resourceQuery: /as=webp/,
      type: "asset",
      generator: {
        filename: "static/media/[name].[hash:8][ext]"
      }
    });


  return config;
};
