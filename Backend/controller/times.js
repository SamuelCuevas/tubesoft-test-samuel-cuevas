const { Router } = require('express');
const router = Router();
const sequelize = require('../database/db');
const Time = require('../database/models/Time');

router.post('/new', (req, res) => {

    const { time } = req.body;

    try {

        Time.create({
            times_saved: time
        }).then( t => {
            res.json({
                ok: true,
                time: t
            });
        } ).catch(error => {
            console.log('Error: ', error)
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false
        });
    }

} );

module.exports = router;