const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

router.get("/pass/:pass", (req, res) => {
  const pass = req.params.pass;
  const hashPass = bcrypt.hashSync(pass, parseInt(process.env.HASH_SALT));
  res.json({
    message: "Password hashed successfully",
    hash: hashPass
  });
})

router.get("/get-token", (req, res) => {
  const userData = {
    id: 420,
    name: "Some user",
    email: "user@example.com",
    role: "admin",
    gender: "Edlof",
  }

  const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1m',  algorithm: 'HS256' });

  res.json({
    message: "Token generated successfully",
    token: token
  });
})

router.get("/verify-token", (req, res) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: "No token provided" });
  }

  try{
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    res.json({
      message: "Token is valid",
      data: decoded
    });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
})

module.exports = router;
