// Dependencies --> require the modules for all the models here
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define the relationships between the models here
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// Export the module
module.exports = {User};