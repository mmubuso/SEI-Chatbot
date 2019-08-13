// import express
const express = require('express')

// bring in the questionApi
const questionApi = require('../models/questions.js')

// create a router that will handle these requests
const questionRouter = express.Router()

// Get all questions
questionRouter.get('/', (req, res) => {
  questionApi.getAllQuestions()
    .then(questions => {
      res.send(questions)
    })
    .catch(err => console.log('Error :' + err))
})

// Get one specific question
questionRouter.get('/:questionId', (req, res) => {
  questionApi.getSingleQuestion(req.params.questionId)
    .then(question => {
      res.send(question)
    })
    .catch(err => console.log('Error :' + err))
})

// Create one specific question account
questionRouter.post('/', (req, res) => {
  questionApi.createQuestion(req.body)
    .then(newQuestion => {
      res.send(newQuestion)
    })
    .catch(err => console.log('Error :' + err))
})

// Update question account
questionRouter.put('/:questionId', (req, res) => {
  questionApi.updateQuestion(req.params.questionId,req.body)
    .then(updatedQuestion => {
      res.send(updatedQuestion)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a question account
questionRouter.delete('/:questionId', (req, res) => {
  questionApi.deleteQuestion(req.params.questionId)
    .then(deletedQuestion => {
      res.send(deletedQuestion)
    })
    .catch(err => console.log('Error :' + err))
})


//Export questionRouter
module.exports = {
  questionRouter
}
