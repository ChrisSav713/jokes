const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((item) => res.json(item))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then((item) => {
            res.json(item)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewJoke = (req, res) => {
    const { body } = req
    Joke.create(req.body)
        .then((item) => res.json(item))
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id },
            req.body, { new: true, runValidators: true }
        )
        .then(item => {
            res.json(item)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(item => {
            res.json(item)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}