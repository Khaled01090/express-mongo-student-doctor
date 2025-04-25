const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

router.put("/:id", doctorController.ChangeNameDoctor);
router.post('/create', doctorController.createDoctorWithQueryParams);

module.exports = router;
