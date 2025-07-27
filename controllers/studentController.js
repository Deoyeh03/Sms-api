const Student = require('../models/student');

const studentController = {
  // Get all students
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch students' });
    }
  },

  // Get student by ID
  getStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch student' });
    }
  },

  // Create new student
  createStudent: async (req, res) => {
    try {
      const { name, age, email, classId, enrolledCourses } = req.body;
      if (!name || !age || !email || !classId || !enrolledCourses) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      const newStudent = await Student.create({ name, age, email, classId, enrolledCourses });
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create student' });
    }
  },

  // Update student
  updateStudent: async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update student' });
    }
  },

  // Delete student
  deleteStudent: async (req, res) => {
    try {
      const deleted = await Student.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  }
};

module.exports = studentController;