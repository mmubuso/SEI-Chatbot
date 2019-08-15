// Import express app
const express = require('express')
const app = express()


const { subjectRouter } = require('./controllers/subject.js')
const { questionRouter } = require('./controllers/questions.js')
const { resourceRouter } = require('./controllers/resources.js')


// parse json files
app.use(express.urlencoded({extended: true}))

app.use(express.json())

// react client build folder
app.use(express.static(`${__dirname}/client/build`))

// Create route paths
app.use('/api/v1/subjects', subjectRouter)
app.use('/api/v1/subjects/:subjectId/questions', questionRouter)
app.use('/api/v1/subjects/:subjectId/resources', resourceRouter)



// render index.html file
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

// Determine environment to run client through
const PORT = process.env.PORT || 3001

// liston on determined port
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
