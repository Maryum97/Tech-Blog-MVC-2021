// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Comment model extends sequelize model
class Comment extends Model {}

// Define table columns for Comment model here
Comment.init(
    {

    }
)

// Export the model
module.exports = Comment;