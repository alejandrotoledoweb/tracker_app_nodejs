const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connection established with the MongoDB database');
});

const usersRoutes = require('./routes/users');
const exercisesRoutes = require('./routes/exercises');

app.use('/users', usersRoutes);
app.use('/exercises', exercisesRoutes);

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
