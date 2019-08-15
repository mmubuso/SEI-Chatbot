// import express
const express = require('express')

// bring in the questionApi
const questionApi = require('../models/questions.js')

// create a router that will handle these requests
const questionRouter = express.Router({mergeParams:true})

// Get all questions
questionRouter.get('/', (req, res) => {
  questionApi.getAllQuestions(req.params.subjectId)
    .then(questions => {
      res.json(questions)
    })
    .catch(err => console.log('Error :' + err))
})

// Get one specific question
questionRouter.get('/:questionId', (req, res) => {
  questionApi.getSingleQuestion(req.params.questionId)
    .then(question => {
      res.json(question)
    })
    .catch(err => console.log('Error :' + err))
})

// Create one specific question account
questionRouter.post('/', (req, res) => {
  console.log(req.body.topic + " " + req.params.subjectId)
  questionApi.createQuestion(req.body,req.params.subjectId)
    .then(newQuestion => {
      res.json(newQuestion)
    })
    .catch(err => console.log('Error :' + err))
})

// Update question account
questionRouter.put('/:questionId', (req, res) => {
  questionApi.updateQuestion(req.params.questionId,req.body)
    .then(updatedQuestion => {
      res.json(updatedQuestion)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a question account
questionRouter.delete('/', (req, res) => {
  questionApi.deleteAllQuestions()
    .then(deletedQuestions => {
      res.json(deletedQuestions)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a question account
questionRouter.delete('/:questionId', (req, res) => {
  questionApi.deleteQuestion(req.params.questionId)
    .then(deletedQuestion => {
      res.json(deletedQuestion)
    })
    .catch(err => console.log('Error :' + err))
})


//Export questionRouter
module.exports = {
  questionRouter
}
