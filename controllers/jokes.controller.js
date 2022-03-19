// const Jokes = require('../models/jokes.model')
const {Jokes} = require('./../models/jokes.model')

//all jokes
module.exports.allJokes = (req,res)=>{
    Jokes.find()
        .then(joke => res.json(joke))
        .catch(err=>res.json(err))
}

    //one joke
module.exports.oneJoke = (req,res)=>{
    const id = req.params.id
    Jokes.findOne({_id:id})
        .then(joke => res.json(joke))
        .catch(err=>res.json(err))
}

// create
module.exports.createJoke = (req,res)=>{
    Jokes.create(req.body)
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}

// update
module.exports.updateJoke = (req,res)=>{
    const id = req.params.id
    Jokes.findOneAndUpdate (
        {_id:id}, 
        req.body, 
        {new: true, runValidators:true}
    )
    .then(response => res.json(response))
    .catch(err=>res.json(err))
}

// delete
module.exports.deleteJoke = (req,res)=>{
    Jokes.deleteOne ({_id:req.params.id})
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}
