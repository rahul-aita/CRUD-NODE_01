const mongoose = require('mongoose');
const localMongoUrl="mongodb://localhost:3000/mydatabase"
mongoose.connect(localMongoUrl,{useNewUrlParser:true});
mongoose.connection.once('connected',function(){
    console.log("db connected")
})

module.exports = mongoose;
