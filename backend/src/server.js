import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParse from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParse());

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/chat", chatRouter);

app.listen(PORT, () => {
  console.log("Server is running " + PORT);
  connectDB();
});
