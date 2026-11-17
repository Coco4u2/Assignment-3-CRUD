const { default: mongoose } = require("mongoose");

let workoutModel = mongoose.Schema({
    name: 'Bench Press',
    type: 'Strength',
    duration: 45,
    date: 2026-11-17,
    notes: 'Chest workout'
}, {
    Collection: 'workouts'
});

module.exports = mongoose.model('Workout', workoutModel);