// connect to mongoose and mongoDB
const mongoose = require('./connection.js')


// A schema that will hold all the objects for 
const QuestionsModelSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  questions: {
    type: String,
    // required: true
  },
  optionA: {
    type: String,
    // required: true,
  },
  optionB: {
    type: String,
    // required: true,
  },
  optionC: {
    type: String,
  },
  optionD: {
    type: String,
  },
  subjectId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
})

// Create a collection 
const QuestionCollection = mongoose.model('Question', QuestionsModelSchema)

// Takes no inputs
// Returns all Questions
function getAllQuestions(subjectId) {
  return QuestionCollection.find({subjectId: subjectId})
}

// Takes a question Id as input
// Returns one question
function getSingleQuestion(questionId) {
  return QuestionCollection.findById(questionId)
}

// Takes an object with a required property of name required string of questions and answers a and b
// Returns a new question object
function createQuestion(newQuestion, subjectId) {
  newQuestion.subjectId = subjectId
  return QuestionCollection.create(newQuestion)
}

// Takes a questionId and an updated question object required string of questions and answers a and b
// Returns updated question object
function updateQuestion(questionId, updatedQuestion) {
  return QuestionCollection.findByIdAndUpdate(questionId, updatedQuestion, { new: true })
}
// no input
// outputs deleted accounts
function deleteAllQuestions() {
  return QuestionCollection.deleteMany()
}

// Takes a questionId as input
// returns deleted questionbject
function deleteQuestion(questionId) {
  return QuestionCollection.findByIdAndDelete(questionId)
}

// Export all functions
module.exports = {
  getAllQuestions,
  getSingleQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  deleteAllQuestions
}
