require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const userRoutes = require('./apir/userRoutes');
const homeRoomRoutes = require('./api/homeRoomRoutes');
const staffRoutes = require('./api/staffRoutes');
const studentRoutes = require('./api/studentRoutes');
const courseRoutes = require('./api/courseRoutes');

const app = express();
const PORT = process.env.PORT;


connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/staffs', staffRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/homeRooms', homeRoomRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('/', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});