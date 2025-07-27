const express = require('express');
const homeRoomController = require('../controllers/homeRoomController');

const router = express.Router();

// GET /api/homeRoom - Get all homeRoomes
router.get('/', homeRoomController.getAllHomeRooms);

// GET /api/homeRooms/:id - Get homeRoom by ID
router.get('/:id', homeRoomController.getHomeRoomById);

// POST /api/homeRoom - Create new homeRoom
router.post('/', homeRoomController.createHomeRoom);

// PUT /api/homeRoom/:id - Update homeRoom
router.put('/:id', homeRoomController.updateHomeRoom);

// DELETE /api/homeRoom/:id - Delete homeRoom
router.delete('/:id', homeRoomController.deleteHomeRoom);

module.exports = router;