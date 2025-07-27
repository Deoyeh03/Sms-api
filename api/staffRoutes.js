const express = require('express');
const staffController = require('../controllers/staffController');

const router = express.Router();

// GET /api/staffs - Get all staffs
router.get('/', staffController.getAllStaff);

// GET /api/staff/:id - Get staff by ID
router.get('/:id', staffController.getStaffById);

// POST /api/staff - Create new staff
router.post('/', staffController.createStaff);

// PUT /api/staff/:id - Update staff
router.put('/:id', staffController.updateStaff);

// DELETE /api/staff/:id - Delete staff
router.delete('/:id', staffController.deleteStaff);

module.exports = router;