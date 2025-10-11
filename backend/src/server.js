import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

import authRouter from "./routes/auth.route.js";

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is running " + PORT);
  connectDB();
});
