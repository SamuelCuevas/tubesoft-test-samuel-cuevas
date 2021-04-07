const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    port: 5432,
    dialect: 'postgres',
    "dialectOptions": {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
});

module.exports = sequelize;

