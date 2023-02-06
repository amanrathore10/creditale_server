//db.js

const mongoose = require('mongoose')
const {username,password} = require("./config")
const url = `mongodb+srv://${username}:${password}@cluster0.mxt5qsh.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( (res) => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
        process.exit();
    })

module.exports = mongoose;
