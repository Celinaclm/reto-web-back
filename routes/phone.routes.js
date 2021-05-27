const express = require('express');
const Phone = require('../models/Phone.model');
const router = express.Router();

//READ: Find all users
router.get("/", (req, res, next) => {
    Phone.find()
    .then(phone => res.status(200).json(phone))
    .catch(err => res.status(500).json(err))
})

// EXPORT //
module.exports = router;