const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.static('./assets'));
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');







app.listen(port,(err)=>{
    if(err){console.log(`error in firing up the server ${err}`)};
    console.log(`server is running on port : ${port}`)
})