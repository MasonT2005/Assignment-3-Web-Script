// models/Assignment.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  description: String,
});

module.exports = mongoose.model('Assignment', assignmentSchema);
