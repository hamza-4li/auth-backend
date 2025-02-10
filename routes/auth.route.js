import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Auth check route to verify token
router.get('/check', protect, (req, res) => {
    res.status(200).json({ message: 'User is authenticated', user: req.user });
});

export default router;