let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let Workout = require('../models/workout');

/* Read Operation */
router.get('/', async(req, res, next) => {
    try {
        const WorkoutList = await Workout.find();

        res.render('Workout/list', {
            title: 'Workouts',
            WorkoutList: WorkoutList
        });
    }
    catch(err) {
        console.log(err);
        res.render('Workout/list', {
            error: 'Error on Server'
        });
    }
});

/* Create/Add Operation */

// Get Operation
router.get('/add', async(req, res, next) => {
    try {
        res.render('Workout/add', {
            title: 'Add Workout'
        });
    }
    catch(err) {
        console.error(err);
        next(err);
    }
});

// Post Operation
router.post('/add', async (req, res, next) => {
    try {
        const newWorkout = new Workout({
            name: req.body.name,
            type: req.body.type,
            duration: req.body.duration,
            date: req.body.date,
            notes: req.body.notes
        });

        await Workout.create(newWorkout);
        res.redirect('/workouts');
    }
    catch(err) {
        console.error(err);
        next(err);
    }
});

/* Update Operation */
// Get Operation
router.get('/edit/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const workoutToEdit = await Workout.findById(id);

        res.render('Workout/edit', {
            title: 'Edit Workout',
            Workout: workoutToEdit
        });
    }
    catch(err) {
        console.error(err);
        next(err);
    }
});


// Post Operation
router.post('/edit/:id', async(req, res, next) => {
    try {
        let id = req.params.id;

        let updatedWorkout = Workout({
            "_id": id,
            "name": req.body.name,
            "type": req.body.type,
            "duration": req.body.duration,
            "date": req.body.date,
            "notes": req.body.notes
        });

        Workout.findByIdAndUpdate(id, updatedWorkout).then(() => {
            res.redirect('/workouts');
        });
    }
    catch(err) {
        console.error(err);
        next(err);
    }
});


/* Delete Operation */
router.get('/delete/:id', async(req, res, next) => {
    try {
        let id = req.params.id;

        Workout.deleteOne({ _id: id }).then(() => {
            res.redirect('/workouts');
        });
    }
    catch(err) {
        console.error(err);
        res.render('Workout/list', {
            error: 'Error on Server'
        });
    }
});

module.exports = router;