// import express
const express = require('express')

// bring in the subjectApi
const subjectApi = require('../models/subject.js')

// create a router that will handle these requests
const subjectRouter = express.Router()

// Get all subjects
subjectRouter.get('/', (req, res) => {
  subjectApi.getAllSubjects()
    .then(subjects => {
      res.json(subjects)
    })
    .catch(err => console.log('Error :' + err))
})

// Get one specific subject
subjectRouter.get('/:subjectId', (req, res) => {
  subjectApi.getSingleSubject(req.params.subjectId)
    .then(subject => {
      res.json(subject)
    })
    .catch(err => console.log('Error :' + err))
})

// Create one specific subject account
subjectRouter.post('/', (req, res) => {
  subjectApi.createSubject(req.body)
    .then(newSubject => {
      res.json(newSubject)
    })
    .catch(err => console.log('Error :' + err))
})

// Update subject account
subjectRouter.put('/:subjectId', (req, res) => {
  subjectApi.updateSubject(req.params.subjectId,req.body)
    .then(updatedSubject => {
      res.json(updatedSubject)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a subject account
subjectRouter.delete('/:subjectId', (req, res) => {
  subjectApi.deleteSubject(req.params.subjectId)
    .then(deletedSubject => {
      res.json(deletedSubject)
    })
    .catch(err => console.log('Error :' + err))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  subjectRouter
}
