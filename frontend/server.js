import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";

const app = express();

// Proxy all /api requests to your HTTP backend
app.use(
  "/api",
  createProxyMiddleware({
    target:
      "http://fintechqrqronboardingbackend-fcwvv1-aa5875-91-108-104-214.traefik.me",
    changeOrigin: true,
    secure: false,
  })
);

// Serve React build files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));

// For all other routes, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server on port 3000 (or 80/443 if using VPS)
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
