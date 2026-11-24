//<!-- workout model --!>//
const { default: mongoose } = require("mongoose");

let workoutModel = mongoose.Schema({
    name: String,
    type: String,
    duration: Number,
    date: Date,
    notes: String
}, {
    collection: 'workouts'
});

module.exports = mongoose.model('Workout', workoutModel);