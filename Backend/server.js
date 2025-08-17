import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/sosDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error(err));

// Schema & Model
const sosSchema = new mongoose.Schema({
  username: String,
  location: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const SOS = mongoose.model("SOS", sosSchema);
// Enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, "dist")));

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API route to receive SOS alerts
app.post("/api/send-sos", async(req, res, next) => {
  try {
    const { message, userId, location } = req.body;

    // Validate inputs
    if (!message || !userId || !location || !location.lat || !location.lng) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    console.log("🚨 SOS Alert Received:");
    console.log("Message:", message);
    console.log("User ID:", userId);
    console.log("Location:", location);

    // Here you can add DB save or notification logic
const newSOS = new SOS({
      username: userId.toString(), // storing userId as username for now
      location: `${location.lat},${location.lng}`,
      message: message,
    });

    await newSOS.save();

    res.json({ success: true, message: "SOS alert received successfully" });
  } catch (error) {
    next(error);
  }
});

// Health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "LMC SOS API is running 🚀" });
});

// Catch-all to serve React app (except API requests)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR:`, err.stack || err);
  res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
