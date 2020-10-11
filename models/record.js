const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    title:{
        type: String
    },
    year:{
        type:String
    },
    author:{
        type:[
            String
        ]
},
url:{
    type:String
},



})

const Record = mongoose.model('doaj',recordSchema);

module.exports = Record;