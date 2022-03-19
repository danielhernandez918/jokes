const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type:String,
        required: [true, "Joke is required"],
        minlength: [10, "Joke must be at least 10 characters"]
    },
    punchline: {
        type:String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters"]
    }
},{timestamps : true});
// create variable equal to model and export
// const Jokes = mongoose.model('joke', JokesSchema);
// module.exports = Jokes;

module.exports.Jokes = mongoose.model('Joke', JokesSchema)