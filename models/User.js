// Dependencies
const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

//  User model extends sequelize model
class User extends Model { }

// Define table columns for User model here
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequalize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)

// Export the model