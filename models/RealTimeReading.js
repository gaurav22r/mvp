import mongoose from "mongoose";

const RealTimeReadingSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true }
});

export default mongoose.model("RealTimeReading", RealTimeReadingSchema);
