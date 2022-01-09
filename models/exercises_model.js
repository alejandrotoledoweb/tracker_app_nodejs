const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema(
  {
    username: { type: String, required: true },
    exercise: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const Exercises = mongoose.model('Exercises', ExercisesSchema);

module.exports = Exercises;
