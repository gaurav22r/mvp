import mongoose from "mongoose";

const FinalFoodStatusSchema = new mongoose.Schema({
    product_id: { type: Number, unique: true, required: true },
    product_name: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    gas_co2: { type: Number, required: true },
    gas_voc: { type: Number, required: true },
    status: { type: String, enum: ["Fresh", "Spoiled"], required: true }
});

export default mongoose.model("FinalFoodStatus", FinalFoodStatusSchema);
