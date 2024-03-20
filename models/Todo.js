const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [50, 'name can not be more than 50 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    required: [true, 'must provide due date'],
  }
})

module.exports = mongoose.model('Todo', TaskSchema)
