const express = require('express');
const app = express();
const routes = require(`./routes`)

let port = 3030;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/v1',routes);
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})