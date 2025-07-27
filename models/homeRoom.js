const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const homeRoomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    section: {
        type: String
    },
    academic_year:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('homeRoom', homeRoomSchema);