// backend/api/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../src/utils/db.js";
import salesRoutes from "../src/routes/salesRoutes.js";

dotenv.config();

// create Express app
const app = express();
app.use(cors());
app.use(express.json());

// connect to Mongo (once, global)
connectDB();

// mount your existing routes
app.use("/api/sales", salesRoutes);

// ❗ IMPORTANT: NO app.listen() here
// On Vercel we just export the app

export default app;
