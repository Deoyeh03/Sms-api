const Course = require('../models/course');

const courseController = {
  // Get all courses
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch courses' });
    }
  },

  // Get course by ID
  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch course' });
    }
  },

  // Create new course
  createCourse: async (req, res) => {
    try {
      const { name, description, staffId } = req.body;
      if (!name || !staffId) {
        return res.status(400).json({ error: 'Name and staffId are required' });
      }
      const newCourse = await Course.create({ name, description, staffId });
      res.status(201).json(newCourse);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create course' });
    }
  },

  // Update course
  updateCourse: async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCourse) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(updatedCourse);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update course' });
    }
  },

  // Delete course
  deleteCourse: async (req, res) => {
    try {
      const deleted = await Course.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete course' });
    }
  }
};

module.exports = courseController;