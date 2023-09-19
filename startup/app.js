const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Uncomment if working with form data
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(require.main.path, 'public')));

module.exports = app;
