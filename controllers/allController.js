const Student = require('../models/Student');
const Doctor = require('../models/Doctor');

const getAllStudentDoctor = async (req, res) => {
  try {
    const [students, doctors] = await Promise.all([
      Student.find(),
      Doctor.find()
    ]);
    res.status(200).json({
      message: "All Data Listed Properly",
      students,
      doctors
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { getAllStudentDoctor };