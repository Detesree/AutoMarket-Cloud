import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
app.use(cors());

// 🟩 Microservicio INVENTORY
app.use(
  "/api/inventory",
  createProxyMiddleware({
    target: process.env.INVENTORY_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/inventory": "/api" }
  })
);

// 🟦 Microservicio CUSTOMERS
app.use(
  "/api/customers",
  createProxyMiddleware({
    target: process.env.CUSTOMERS_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/customers": "/api" }
  })
);

// 🟧 Microservicio SALES
app.use(
  "/api/sales",
  createProxyMiddleware({
    target: process.env.SALES_URL,
    changeOrigin: true,
    pathRewrite: { "^/api/sales": "/api" }
  })
);

app.listen(process.env.PORT, () => {
  console.log(`API Gateway running on port ${process.env.PORT}`);
});
