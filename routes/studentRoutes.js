const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/create/hardcoded", studentController.createStudentHardcoded);
router.post("/create/body", studentController.createStudentFromBody);
router.get("/all", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.delete("/student", studentController.deleteStudent);

module.exports = router;
