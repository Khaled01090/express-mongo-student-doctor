const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.put("/:id", doctorController);

module.exports = router;
