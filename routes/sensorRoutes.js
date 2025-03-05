import express from "express";
import { addRealTimeData, addCustomerPurchase, checkFoodStatus } from "../controllers/sensorController.js";

const router = express.Router();

router.post("/real-time", addRealTimeData);
router.post("/purchase", addCustomerPurchase);
router.get("/status", checkFoodStatus);

export default router;
