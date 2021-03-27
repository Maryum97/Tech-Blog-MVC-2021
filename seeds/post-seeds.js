// Dependency
const { Post } = require('../models');

// Data to be seeded in the db
const postData = [
    {
        title: 'Sequelize Data Types',
        description: 'Sequelize has several built in, handy data types that you can use when you define a model.  The most commonly used for simple databases are INTEGER and STRING.',
        user_id: 1,
      },
      {
        title: 'Handlebars Template Engine',
        description: 'Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.  For instance, you can set up a layout used for several pages with templates for a home page and a user dashboard.',
        user_id: 2,
      },
      {
        title: 'Handlebars Partials',
        description: 'Partials are another handlebars feature where you can create a partial bit of code for something like post information, or for a comment. You can then use that partial whenever that bit of information is needed for your website.',
        user_id: 2,
      }
]

// Call function to seeds the Post model here
const seedPosts = () => Post.bulkCreate(postData);

// Export the module
module.exports = seedPosts;