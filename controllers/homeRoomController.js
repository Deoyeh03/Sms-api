const HomeRoom = require('../models/homeRoom');

const homeRoomController = {
  // Get all homeRooms
  getAllHomeRooms: async (req, res) => {
    try {
      const homeRooms = await HomeRoom.find();
      res.json(homeRooms);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch homeRooms' });
    }
  },

  // Get homeRoom by ID
  getHomeRoomById: async (req, res) => {
    try {
      const homeRoom = await HomeRoom.findById(req.params.id);
      if (!homeRoom) {
        return res.status(404).json({ error: 'HomeRoom not found' });
      }
      res.json(homeRoom);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch homeRoom' });
    }
  },

  // Create new homeRoom
  createHomeRoom: async (req, res) => {
    try {
      const { name, section, academic_year } = req.body;
      if (!name || !academic_year) {
        return res.status(400).json({ error: 'Name and academic_year are required' });
      }
      const newHomeRoom = await HomeRoom.create({ name, section, academic_year });
      res.status(201).json(newHomeRoom);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create homeRoom' });
    }
  },

  // Update homeRoom
  updateHomeRoom: async (req, res) => {
    try {
      const updatedHomeRoom = await HomeRoom.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedHomeRoom) {
        return res.status(404).json({ error: 'HomeRoom not found' });
      }
      res.json(updatedHomeRoom);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update homeRoom' });
    }
  },

  // Delete homeRoom
  deleteHomeRoom: async (req, res) => {
    try {
      const deleted = await HomeRoom.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'HomeRoom not found' });
      }
      res.status(200).json({ message: 'HomeRoom deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete homeRoom' });
    }
  }
};

module.exports = homeRoomController;