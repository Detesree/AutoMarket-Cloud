import express from "express";
import cors from "cors";
import routes from "./routes.js";
import dotenv from "dotenv";
import client from "prom-client";

dotenv.config();

const app = express();   // ✅ primero se declara app

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// Métricas Prometheus
// ===============================
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    res.status(500).end(err.message);
  }
});

// ===============================
// Rutas
// ===============================
app.use("/api", routes);

// ===============================
// Servidor
// ===============================
app.listen(process.env.PORT, () => {
  console.log(`Customers Service running on port ${process.env.PORT}`);
});
