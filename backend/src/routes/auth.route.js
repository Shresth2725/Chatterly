import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  login,
  logout,
  onboard,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboard", protectedRoute, onboard);

router.post("/me", protectedRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
