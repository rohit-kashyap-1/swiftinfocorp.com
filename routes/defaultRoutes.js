const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      res.render('home', {
        title: 'Home Page',
        description: 'This is the SEO description for the home page.',
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;