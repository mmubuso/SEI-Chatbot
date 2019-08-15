// import express
const express = require('express')

// bring in the resourceApi
const resourceApi = require('../models/resources.js')

// create a router that will handle these requests
const resourceRouter = express.Router({mergeParams:true})

// Get all resources
resourceRouter.get('/', (req, res) => {
  resourceApi.getAllResources(req.params.subjectId)
    .then(resources => {
      res.json(resources)
    })
    .catch(err => console.log('Error :' + err))
})

// Get one specific resource
resourceRouter.get('/:resourceId', (req, res) => {
  resourceApi.getSingleResource(req.params.resourceId)
    .then(resource => {
      res.json(resource)
    })
    .catch(err => console.log('Error :' + err))
})

// Create one specific resource account
resourceRouter.post('/', (req, res) => {
  resourceApi.createResource(req.body,req.params.subjectId)
    .then(newResource => {
      res.json(newResource)
    })
    .catch(err => console.log('Error :' + err))
})

// Update resource account
resourceRouter.put('/:resourceId', (req, res) => {
  resourceApi.updateResource(req.params.resourceId,req.body)
    .then(updatedResource => {
      res.json(updatedResource)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete all resources 
resourceRouter.delete('/', (req, res) => {
  resourceApi.deleteAllResources()
    .then(deletedResources => {
      res.json(deletedResources)
    })
    .catch(err => console.log('Error :' + err))
})

// Delete a resource account
resourceRouter.delete('/:resourceId', (req, res) => {
  resourceApi.deleteResource(req.params.resourceId)
    .then(deletedResource => {
      res.json(deletedResource)
    })
    .catch(err => console.log('Error :' + err))
})


//Export resourceRouter
module.exports = {
  resourceRouter
}
