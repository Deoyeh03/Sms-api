const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// GET /api/course - Get all users
router.get('/', courseController.getAllCourses);

// GET /api/course/:id - Get user by ID
router.get('/:id', courseController.getCourseById);

// POST /api/course - Create new user
router.post('/', courseController.createCourse);

// PUT /api/course/:id - Update user
router.put('/:id', courseController.updateCourse);

// DELETE /api/course/:id - Delete user
router.delete('/:id', courseController.deleteCourse);

module.exports = router;