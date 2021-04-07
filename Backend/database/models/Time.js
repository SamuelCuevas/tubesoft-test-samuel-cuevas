const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Time extends Model {}
Time.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  times_saved: DataTypes.STRING
}, { sequelize, modelName: 'time' });


module.exports = Time;