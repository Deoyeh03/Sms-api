const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// GET /api/student - Get all users
router.get('/', studentController.getAllStudents);

// GET /api/student/:id - Get user by ID
router.get('/:id', studentController.getStudentById);

// POST /api/student - Create new user
router.post('/', studentController.createStudent);

// PUT /api/student/:id - Update user
router.put('/:id', studentController.updateStudent);

// DELETE /api/student/:id - Delete user
router.delete('/:id', studentController.deleteStudent);

module.exports = router;