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
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequest);
router.get("/outgoing-friend-requests", getOutgoingFriendRequest);

export default router;
