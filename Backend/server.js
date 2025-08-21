import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import sosRoute from "./route/sosRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);
// Database connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "../Frontend/dist")));
// Routes
app.use("/api", sosRoute);

// Error handler
app.use(errorHandler);
app.get(/^\/(?!api).*/, (req, res) => { res.sendFile(path.join(__dirname, "../Frontend/dist", "index.html")); });

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
