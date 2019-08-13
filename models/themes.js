// connect to mongoose and mongoDB
const mongoose = require('./connection.js')


// A schema that will hold all the objects 
const ThemesModelSchema = new mongoose.Schema({
    primaryColor: {
        type: String,
        required: true,
        default: 'black'
    },
    secondaryColor: {
        type: String,
        required: true,
        default: 'grey'
    }
})

// Create a theme 
const ThemesCollection = mongoose.model('Theme', ThemesModelSchema)

// Takes no inputs
// Returns all Themes
function getAllThemes() {
    return ThemesCollection.find()
}

// Takes a theme Id as input
// Returns one theme
function getSingleTheme(themeId) {
    return ThemesCollection.findById(themeId)
}

// Takes an object with a required property of name required string of primary color and secondary color
// Returns a new theme object
function createTheme(newTheme) {
    return ThemesCollection.create(newTheme)
}

// Takes a themeId and an updated theme object with a required string of primary color and secondary color
// Returns updated theme object
function updateTheme(themeId, updatedTheme) {
    return ThemesCollection.findByIdAndUpdate(themeId, updatedTheme, { new: true })
}

// Takes a themeId as input
// returns deleted theme bject
function deleteTheme(themeId) {
    return ThemesCollection.findByIdAndDelete(themeId)
}

// Export all functions
module.exports = {
    getAllThemes,
    getSingleTheme,
    createTheme,
    updateTheme,
    deleteTheme
}
