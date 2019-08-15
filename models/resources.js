// connect to mongoose and mongoDB
const mongoose = require('./connection.js')


// A schema that will hold all the objects for 
const ResourcesModelSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  resourceA: {
    type: String,
    // required: true
  },
  resourceB: {
    type: String,
    // required: true,
  },
  resourceC: {
    type: String,
    // required: true,
  },
  resourceD: {
    type: String,
  },
  subjectId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
})

// Create a collection 
const ResourceCollection = mongoose.model('Resource', ResourcesModelSchema)

// Takes no inputs
// Returns all Resources
function getAllResources(subjectId) {
  return ResourceCollection.find({subjectId: subjectId})
}

// Takes a resource Id as input
// Returns one resource
function getSingleResource(resourceId) {
  return ResourceCollection.findById(resourceId)
}

// Takes an object with a required property of name required string of resources and answers a and b
// Returns a new resource object
function createResource(newResource, subjectId) {
  newResource.subjectId = subjectId
  return ResourceCollection.create(newResource)
}

// Takes a resourceId and an updated resource object required string of resources and answers a and b
// Returns updated resource object
function updateResource(resourceId, updatedResource) {
  return ResourceCollection.findByIdAndUpdate(resourceId, updatedResource, { new: true })
}

// Takes a resourceId as input
// returns deleted resouce object
function deleteResource(resourceId) {
  return ResourceCollection.findByIdAndDelete(resourceId)
}

//delete all
function deleteAllResources() {
  return ResourceCollection.deleteMany(resourceId)
}

// Export all functions
module.exports = {
  getAllResources,
  getSingleResource,
  createResource,
  updateResource,
  deleteResource,
  deleteAllResources
}
