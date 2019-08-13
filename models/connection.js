// connect mongoose to project
const mongoose = require('mongoose');

// create MongoDB environament
const connectionString = process.env.MONGODB_URI || "mongodb://localhost/sei-chatbot";


// create connection to mongodb and mongooose
mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });

// will allow us to use mongoDb in our controllers
module.exports = mongoose
