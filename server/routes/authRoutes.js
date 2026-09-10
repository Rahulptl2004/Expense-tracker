import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddlerware.js";

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user,
    });
});

export default router;