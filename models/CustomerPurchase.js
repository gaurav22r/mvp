import mongoose from "mongoose";

const CustomerPurchaseSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    product_id: { type: Number, required: true },
    gas_co2: { type: Number, required: true },
    gas_voc: { type: Number, required: true }
});

export default mongoose.model("CustomerPurchase", CustomerPurchaseSchema);
