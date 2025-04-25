const Student = require('../models/Student');

const deleteStudent = async (req, res) => {
    try {
        const { id, name } = req.query;

        // Check if both id and name are missing
        if (!id && !name) {
            return res.status(400).json({ message: "ID or name must be provided." });
        }

        // Create query based on the provided parameter
        const query = id ? { _id: id } : { name: name };

        // Find and delete the student
        const deletedStudent = await Student.findOneAndDelete(query);

        // If no student found, return a 404
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found." });
        }

        // Return the deleted student data
        res.status(200).json({ message: "Student deleted successfully.", deletedStudent });
    } catch (error) {
        // Catch and handle any errors
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { deleteStudent };
