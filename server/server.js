const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const port = process.env.PORT;
//import cors

app.use(cors())
//configure express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("./config/mongoose.config")

//routes
require('./routes/person.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));