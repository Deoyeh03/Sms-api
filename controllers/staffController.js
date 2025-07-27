const Staff = require('../models/staff');

const staffController = {
  // Get all staff
  getAllStaff: async (req, res) => {
    try {
      const staff = await Staff.find();
      res.json(staff);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch staff' });
    }
  },

  // Get staff by ID
  getStaffById: async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id);
      if (!staff) {
        return res.status(404).json({ error: 'Staff not found' });
      }
      res.json(staff);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch staff' });
    }
  },

  // Create new staff
  createStaff: async (req, res) => {
    try {
      const { name, email, role } = req.body;
      if (!name || !email || !role) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      const newStaff = await Staff.create({ name, email, role });
      res.status(201).json(newStaff);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create staff' });
    }
  },

  // Update staff
  updateStaff: async (req, res) => {
    try {
      const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedStaff) {
        return res.status(404).json({ error: 'Staff not found' });
      }
      res.json(updatedStaff);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update staff' });
    }
  },

  // Delete staff
  deleteStaff: async (req, res) => {
    try {
      const deleted = await Staff.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Staff not found' });
      }
      res.status(200).json({ message: 'Staff deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete staff' });
    }
  }
};

module.exports = staffController;