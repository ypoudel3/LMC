import SOS from "../model/sosMessage.js";

export const sendSOS = async (req, res, next) => {
  try {
    const { message, userId, location } = req.body;

    if (!message || !userId || !location?.lat || !location?.lng) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    console.log("🚨 SOS Alert Received:", { message, userId, location });

    const newSOS = new SOS({
      username: userId.toString(),
      location: `${location.lat},${location.lng}`,
      message
    });

    await newSOS.save();

    res.json({ success: true, message: "SOS alert received successfully" });
  } catch (error) {
    next(error);
  }
};
