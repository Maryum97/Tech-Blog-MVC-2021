// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

// Post model extends sequelize model
class Post extends Model {}

// Define table columns for Post model here
Post.init(
    {

    }
)

// Export the model
module.exports = Post;