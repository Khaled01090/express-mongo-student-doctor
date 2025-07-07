const Doctor = require("../models/Doctor");

const ChangeNameDoctor = async (req, res) => {
  try {
    const { newName } = req.body;
    const { id } = req.params;

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    doctor.name = newName;
    await doctor.save();

    return res.status(200).json({ message: "Doctor name has been modified", doctor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error occurred during modifying" });
  }
};

const createDoctorWithQueryParams = async (req, res) => {
  try {
    const { name, age, phone } = req.query;

    if (!name || !age || !phone) {
      return res.status(400).json({ message: 'Please provide name, age, and phone in the query parameters.' });
    }

    const newDoctor = new Doctor({
      name,
      age,
      phone
    });

    await newDoctor.save()

    res.status(201).json({ message: 'Doctor created successfully', doctor: newDoctor });
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({ message: 'Failed to create doctor' });
  }
};

module.exports = {ChangeNameDoctor, createDoctorWithQueryParams};
