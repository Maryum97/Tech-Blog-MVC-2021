// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Use bycrypt for password hashing
const bcrypt = require('bcrypt');
// const { beforeCreate, afterCreate } = require('./Post');

const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  });

//  User model extends sequelize model
// class User extends Model {
//     checkPassword(loginPw) {
//         return bcrypt.compareSync(loginPw, this.password);
//     }
// }

// Define table columns for User model here
// User.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [8]
//             }
//         }
//     },
//     {
//         // Hooks for hashing password
//         hooks: {
//             // Hash the password before it is created in db
//             async beforeCreate(newUserData) {
//                 newUserData.password = await bcrypt.hash(newUserData.password, 10);
//                 return newUserData;
//             },
//             // Hash the password after it is updated in db
//             async afterCreate(updatedUserData) {
//                 updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
//                 return updatedUserData;
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user',
//     }
// )

// Export the model
module.exports = User;