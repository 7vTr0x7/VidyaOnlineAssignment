const { createProxyMiddleware } = require("http-proxy-middleware");

modulexports = function (app) {
  app.use(
    "/api", // any request starting with /api
    createProxyMiddleware({
      target: "http://your-backend-url", // your HTTP backend
      changeOrigin: true,
      secure: false,
    })
  );
};
