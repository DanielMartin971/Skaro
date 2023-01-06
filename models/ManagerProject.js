const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ManagerProject extends Model {}

ManagerProject.init(
    {
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
        description: {
            type: DataTypes.STRING,

        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: "managerProject",
    }
);
module.exports = ManagerProject;