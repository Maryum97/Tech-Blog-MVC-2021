// Dependencies
const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;

// What is this page supposed to render exactly?