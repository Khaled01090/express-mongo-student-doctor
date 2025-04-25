const Doctor = require("./models/Doctor"); // مسار الموديل حسب مكانه

export const ChangeNameDoctor = async (req, res) => {
  try {
    const { newName } = req.body;
    const { id } = req.params;

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({ message: "الدكتور مش موجود" });
    }

    doctor.name = newName;
    await doctor.save();

    return res.status(200).json({ message: "تم تعديل اسم الدكتور", doctor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "حصل خطأ أثناء التعديل" });
  }
};
