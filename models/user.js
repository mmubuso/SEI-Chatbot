// connect to mongoose and mongoDB
const mongoose = require('./connection.js')



const UserModelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: 'Anon'
  }
})

// Create a collection 
const UserCollection = mongoose.model('User', UserModelSchema)

// Takes no inputs
// Returns all users
function getAllUsers() {
  return UserCollection.find()
}

// Takes a user Id as input
// Returns one user
function getSingleUser(userId) {
  return UserCollection.findById(userId)
}

// Takes an object with a required property of name
// Returns a new user object
function createUser(newUser) {
  return UserCollection.create(newUser)
}

// Takes a userId and an updated user object with a required property of name
// Returns updated user object
function updateUser(userId, updatedUser) {
  return UserCollection.findByIdAndUpdate(userId, updatedUser, {new: true})
}

// Takes a userId as input
// returns deleted userObject
function deleteUser(userId) {
  return UserCollection.findByIdAndDelete(userId)
}

// Export all functions
module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser
}
