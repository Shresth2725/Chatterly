import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendRequest,
  getMyFriends,
  getOutgoingFriendRequest,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectedRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.post("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-request", getFriendRequest);
router.get("/outgoing-friend-request", getOutgoingFriendRequest);

export default router;
