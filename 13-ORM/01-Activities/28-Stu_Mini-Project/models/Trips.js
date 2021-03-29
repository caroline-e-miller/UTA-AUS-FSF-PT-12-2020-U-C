const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model { }

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numberOfWeeks: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        trip_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'trips',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
);

module.exports = Trips;
