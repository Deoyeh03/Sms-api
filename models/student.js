const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'homeRoom', // should match your model name
        required: true
    },
    enrolledCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]
});

module.exports = mongoose.model('student', studentSchema);