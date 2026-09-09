import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
console.log("JWT SECRET:", process.env.JWT_SECRET);
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
 
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Expense Tracker API is running....");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);   
})
