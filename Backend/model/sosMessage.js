import mongoose from "mongoose";

// Schema & Model
const sosSchema = new mongoose.Schema({
  username: { type: String, required: true },
  location: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Create model
const SOS = mongoose.model("SOS", sosSchema);

// Export as default
export default SOS;
