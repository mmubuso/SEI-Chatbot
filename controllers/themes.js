// import express
const express = require('express')

// bring in the themeApi
const themeApi = require('../models/themes.js')

// create a router that will handle these requests
const themeRouter = express.Router()

// Get all themes
themeRouter.get('/', (req, res) => {
  themeApi.getAllThemes()
    .then(themes => {
      res.json(themes)
    })
    .catch(err => console.log('Error :' + err))
})

// Get one specific theme
themeRouter.get('/:themeId', (req, res) => {
  themeApi.getSingleTheme(req.params.themeId)
    .then(theme => {
      res.json(theme)
    })
    .catch(err => console.log('Error :' + err))
})

// Create one specific theme account
themeRouter.post('/', (req, res) => {
  themeApi.createTheme(req.body)
    .then(newTheme => {
      res.json(newTheme)
    })
    .catch(err => console.log('Error :' + err))
})

// Update theme account
themeRouter.put('/:themeId', (req, res) => {
  themeApi.updateTheme(req.params.themeId,req.body)
    .then(updatedTheme => {
      res.json(updatedTheme)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a theme account
themeRouter.delete('/:themeId', (req, res) => {
  themeApi.deleteTheme(req.params.themeId)
    .then(deletedTheme => {
      res.json(deletedTheme)
    })
    .catch(err => console.log('Error :' + err))
})


//Export themeRouter
module.exports = {
  themeRouter
}
