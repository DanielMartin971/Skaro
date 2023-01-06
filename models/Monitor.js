const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monitor extends Model {}

Monitor.init(
    {
      
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'monitor',
      }
);

module.exports = Monitor;