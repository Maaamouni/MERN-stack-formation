import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/users.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json()); //allow json

app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("is UP.")
}) 