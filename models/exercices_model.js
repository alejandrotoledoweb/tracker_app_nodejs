const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExercicesSchema = new Schema(
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

const Exercices = mongoose.model('Exercices', ExercicesSchema);

module.exports = Exercices;
