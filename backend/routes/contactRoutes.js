import express from 'express';
import Contact from '../Contact.js';

const router = express.Router();

// POST /api/contact - save a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email and message.' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Contact message received. Thank you!', contactId: contact._id });
  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
