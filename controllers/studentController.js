const Student = require('../models/Student');

exports.createStudentHardcoded = (req, res) => {
    const student = {
        name: "Ahmed Ali",
        age: 22,
        major: "Computer Science"
    };

    res.status(201).json({
        message: "Student created (hardcoded)",
        student
    });
};

exports.createStudentFromBody = (req, res) => {
    const { name, age, major } = req.body;

    if (!name || !age || !major) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const student = { name, age, major };

    res.status(201).json({
        message: "Student created from body",
        student
    });
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            message: "All students",
            students
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student found",
            student
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id, name } = req.query;

        if (!id && !name) {
            return res.status(400).json({ message: "ID or name must be provided." });
        }

        const query = id ? { _id: id } : { name: name };

        const deletedStudent = await Student.findOneAndDelete(query);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found." });
        }

        res.status(200).json({ message: "Student deleted successfully.", deletedStudent });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = {
    createStudentHardcoded,
    createStudentFromBody,
    getAllStudents,
    getStudentById,
    deleteStudent
};
