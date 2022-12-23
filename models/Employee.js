const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projects: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
      }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'employee',
      }
);

module.exports = Employee;