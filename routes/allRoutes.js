const express = require('express')
const router = express.Router()
const allController = require("../controllers/allController");

router.get("/all", allController.getAllStudentDoctor)

module.exports = router;