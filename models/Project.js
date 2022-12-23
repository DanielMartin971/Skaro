const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
      id: {
        type: DataTypes.Integer,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employees: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
      },
      progress: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tasks: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'project',
      }
);

module.exports = Project;