const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', pageName: 'home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', pageName: 'about' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us', pageName: 'contact' });
});

module.exports = router;