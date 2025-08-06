const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello from API!");
});

router.get("/data/:fata", (req, res) => {
    const {fata} = req.params;
    res.send(`This is some data from the API! You requested: ${fata}`);
});

module.exports = router;
