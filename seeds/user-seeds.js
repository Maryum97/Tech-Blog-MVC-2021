// Dependency
const { User } = require('../models');

// Data to be seeded in the db
const userData = [
    {
        name: "Maryum",
        email: "maryum@gmail.com",
        password: "password1234"
    },
    {
        name: "Ali",
        email: "ali@gmail.com",
        password: "password1234"
    },
    {
        name: "Thomas",
        email: "tom11@gmail.com",
        password: "password1234"
    },
    {
        name: "Sally",
        email: "sal@gmail.com",
        password: "password1234"
    },
    {
        name: "Devone",
        email: "devone@gmail.com",
        password: "password1234"
    },
]

// Call function to seeds the Post model here
const seedUsers = () => User.bulkCreate(userData);

// Export the module
module.exports = seedUsers;