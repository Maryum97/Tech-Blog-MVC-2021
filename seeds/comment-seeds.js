// Dependency
const { Comment } = require('../models');

// Data to be seeded in the db
const commentData = [
    {
        text: "Thank you for clarifying this topic for me!",
        post_id: 1,
        user_id: 1
    },
    {
        text: "This was really helpful, thanks!",
        post_id: 1,
        user_id: 2
    },
    {
        text: "Great post! I fixed my error now, using this info.",
        post_id: 2,
        user_id: 3
    }
];

// Call function to seeds the Comment model here
const seedComments = () => Comment.bulkCreate(commentData);

// Export the module
module.exports = seedComments;