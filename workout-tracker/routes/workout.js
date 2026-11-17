let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let Workout = require('../models/workout');

/* Read Operation */
router.get('/', async(req, res, next) => {
    try {
        const WorkoutList = await Workout.find();

        res.render('Workouts/list', {
            title: 'Workouts',
            WorkoutList: WorkoutList
        });
    }
    catch(err) {
        console.log(err);
        res.render('Workouts/list', {
            error: 'Error on Server'
        });
    }
});

// Create Operation


// Update Operation


// Delete Operation


module.exports = router;