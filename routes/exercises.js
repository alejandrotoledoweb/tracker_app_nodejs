const router = require('express').Router();
let Exercise = require('../models/exercises_model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then((exercises) => res.status(200).json(exercises))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted successfully!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  const filter = { id: req.params.id };
  const exerciseUpdate = {
    username: req.body.username,
    description: req.body.description,
    duration: req.body.duration,
    date: req.body.date,
  };

  Exercise.findByIdAndUpdate(req.params.id, exerciseUpdate)
    .then(() => res.json('Exercise updated'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

// const router = require('express').Router();
// let Exercise = require('../models/exercises_model');

// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then((exercises) => res.status(200).json(exercises))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);

//   const newExercise = new Exercise({ username, description, duration, date });

//   newExercise
//     .save()
//     .then(() => res.json('Exercise added!'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then((exercise) => res.json(exercise))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted successfully!'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').put((req, res) => {
//   const filter = { id: req.params.id };
//   const exerciseUpdate = {
//     username: req.body.username,
//     description: req.body.description,
//     duration: req.body.duration,
//     date: req.body.date,
//   };

//   Exercise.findByIdAndUpdate(req.params.id, exerciseUpdate)
//     .then(() => res.json('Exercise updated'))
//     .catch((err) => res.status(400)
// });
