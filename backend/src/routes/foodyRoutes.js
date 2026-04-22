// foodyRoutes.js
import express from 'express';
import db from '../db.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getallergies', authMiddleware, (req, res) => {
  try {
    const foodies = db.prepare('SELECT * FROM allergies WHERE UserID = ?').all(req.userId);
    res.json(foodies);
  } catch (error) {
    console.error('Error fetching allergies:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/addallergy', authMiddleware, (req, res) => {
  try {
    const { allergy } = req.body;
    const insertAllergy = db.prepare('INSERT INTO allergies (UserID, Allergy) VALUES (?, ?)');
    const result = insertAllergy.run(req.userId, allergy);
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error adding allergy:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/getpreferences', authMiddleware, (req, res) => {
  try {
    const preferences = db.prepare('SELECT * FROM preferences WHERE UserID = ?').all(req.userId);
    res.json(preferences);
  } catch (error) {
    console.error('Error fetching preferences:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/addpreference', authMiddleware, (req, res) => {
  try {
    const { preference_id } = req.body;
    const insertPreference = db.prepare('INSERT INTO preferences (UserID, PreferenceID) VALUES (?, ?)');
    const result = insertPreference.run(req.userId, preference_id);
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error adding preference:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/removepreference', authMiddleware, (req, res) => {
  try {
    const { preference_id } = req.body;
    const deletePreference = db.prepare('DELETE FROM preferences WHERE UserID = ? AND PreferenceID = ?');
    const result = deletePreference.run(req.userId, preference_id);
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Preference not found' });
    }
    res.json({ success: true });
  } catch (error) {
    console.error('Error removing preference:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;