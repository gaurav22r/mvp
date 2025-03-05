import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

// MongoDB Connection
const MONGO_URI = "mongodb+srv://gauravktg03:Q5hrmdfskfR22kk3@cluster0.f2kot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// API Route
app.get("/", (req, res) => {
  res.send("✅ Server is Running & MongoDB Connected");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
