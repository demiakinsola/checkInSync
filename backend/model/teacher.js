const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  refreshToken: String
});

module.exports = mongoose.model('teacher', teacherModel);