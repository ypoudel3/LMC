import express from "express";
import { sendSOS } from "../controller/sosController.js";

const router = express.Router();

router.post("/send-sos", sendSOS);

export default router;
