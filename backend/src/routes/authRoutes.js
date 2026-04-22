import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    try {
        const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
        const result = stmt.run(username, hashedPassword);

        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: "24h"}); 
        res.json({token})
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    try {
        const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
        const user = stmt.get(username);

        if (!user) {
            return res.status(404);
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }
        console.log(user);

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: "24h"}); 
        res.json({token});
    } catch (err) {
        console.log(err.message);
        res.status(503);
    }
});


export default router;