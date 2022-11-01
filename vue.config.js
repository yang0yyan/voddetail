const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/service-Ccteg": {
        target: "http://10.7.1.94:10033/service-ccteg",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/service-Ccteg": "",
        },
      },
    },
  },
});
