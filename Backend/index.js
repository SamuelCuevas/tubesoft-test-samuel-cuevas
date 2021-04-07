const express = require('express');
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./database/db');

// Express server
const app = express();

// CORS
app.use(cors());

// Public Directory
app.use( express.static('public'));

app.use( express.json() );

// Route
app.use('/chronometer', require('./controller/times'));

// Listen
app.listen( process.env.PORT, () => {
    console.log(`Server On in port: ${ process.env.PORT }`);

    // Db
    try{
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(error => {
            console.log('Unable to connect to the database:', error);
        })
    } catch(error) {
        throw new Error('Error DB');
    }
} );