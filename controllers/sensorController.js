import RealTimeReading from "../models/RealTimeReading.js";
import CustomerPurchase from "../models/CustomerPurchase.js";
import FinalFoodStatus from "../models/FinalFoodStatus.js";

export const addRealTimeData = async (req, res) => {
    try {
        const { temperature, humidity } = req.body;
        const data = await RealTimeReading.create({ temperature, humidity });
        res.status(201).json({ message: "Data stored", data });
    } catch (error) {
        res.status(500).json({ error: "Error storing data" });
    }
};

export const addCustomerPurchase = async (req, res) => {
    try {
        const { product_id, gas_co2, gas_voc } = req.body;
        const data = await CustomerPurchase.create({ product_id, gas_co2, gas_voc });

        let status = "Fresh";
        if (gas_co2 > 1000 || gas_voc > 500) status = "Spoiled";

        const finalStatus = await FinalFoodStatus.findOneAndUpdate(
            { product_id },
            { gas_co2, gas_voc, status },
            { upsert: true, new: true }
        );

        res.status(201).json({ message: "Purchase stored", finalStatus });
    } catch (error) {
        res.status(500).json({ error: "Error storing purchase" });
    }
};

export const checkFoodStatus = async (req, res) => {
    try {
        const data = await FinalFoodStatus.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Error fetching status" });
    }
};
