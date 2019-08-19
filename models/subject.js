// connect to mongoose and mongoDB
const mongoose = require('./connection.js')



const SubjectModelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: 'Anon'
  }
})

// Create a collection 
const SubjectCollection = mongoose.model('Subject', SubjectModelSchema)

// Takes no inputs
// Returns all subjects
function getAllSubjects() {
  return SubjectCollection.find()
}

// Takes a subject Id as input
// Returns one subject
function getSingleSubject(subjectId) {
  return SubjectCollection.findById(subjectId)
}

// Takes an object with a required property of name
// Returns a new subject object
function createSubject(newSubject) {
  return SubjectCollection.create(newSubject)
}

// Takes a subjectId and an updated subject object with a required property of name
// Returns updated subject object
function updateSubject(subjectId, updatedSubject) {
  return SubjectCollection.findByIdAndUpdate(subjectId, updatedSubject, {new: true})
}

// Takes a subjectId as input
// returns deleted subject Object
function deleteSubject(subjectId) {
  return SubjectCollection.findByIdAndDelete(subjectId)
}

// delete all subjects
function deleteAllSubjects(){
  return SubjectCollection.deleteMany()
}

// Export all functions
module.exports = {
  getAllSubjects,
  getSingleSubject,
  createSubject,
  updateSubject,
  deleteSubject,
  deleteAllSubjects
}
