// import express
const express = require('express')

// bring in the userApi
const userApi = require('../models/user.js')

// create a router that will handle these requests
const userRouter = express.Router()

// Get all users
userRouter.get('/', (req, res) => {
  userApi.getAllUsers()
    .then(users => {
      res.send(users)
    })
    .catch(err => console.log('Error :' + err))
})

// Get one specific user
userRouter.get('/:userId', (req, res) => {
  userApi.getSingleUser(req.params.userId)
    .then(user => {
      res.send(user)
    })
    .catch(err => console.log('Error :' + err))
})

// Create one specific user account
userRouter.post('/', (req, res) => {
  userApi.createUser(req.body)
    .then(newUser => {
      res.send(newUser)
    })
    .catch(err => console.log('Error :' + err))
})

// Update user account
userRouter.put('/:userId', (req, res) => {
  userApi.updateUser(req.params.userId,req.body)
    .then(updatedUser => {
      res.send(updatedUser)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a user account
userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then(deletedUser => {
      res.send(deletedUser)
    })
    .catch(err => console.log('Error :' + err))
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
