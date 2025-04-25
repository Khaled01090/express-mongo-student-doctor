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

module.exports = ChangeNameDoctor;
