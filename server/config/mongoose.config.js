//import the mongoose library
const mongoose = require('mongoose')

//extraxt vars from the .env
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD

//connection string to the schema
const uri = `mongodb+srv://${username}:${pw}@cluster0.bacijc4.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedtopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));