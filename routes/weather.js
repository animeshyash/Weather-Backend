import express from "express";
import { getWeather, searchWeather } from "../controllers/weather.js";
const router = express.Router();

router.post("/getWeather", getWeather);
router.post("/searchWeather", searchWeather);

export default router;
