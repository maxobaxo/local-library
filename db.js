// import the mongoose module
var mongoose = require('mongoose')

// set up default mongoose connection
var mongoDB = '__DB URL__'
mongoose.connect(mongoDB, {
    useMongoClient: true
});

// get mongoose to use the global promise library
mongoose.Promise = global.Promise

// get the default connection
var db = mongoose.connection

// bind connection to error event (to get notifications of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
