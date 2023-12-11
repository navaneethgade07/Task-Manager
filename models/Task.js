const mongoose = require('mongoose');

// defining the schema
const createSchema = new mongoose.Schema({
    name:{
        // validations
        type : String,              
        required : [true,'must provide the name'],
        trim : true,
        maxlength : [20, 'should not be more than 20 characters'],
    },
    id:Number,
})


// passing the model for that schema and exporting it to the controllers folder to write the documnets for specific collection

module.exports = mongoose.model('Task',createSchema);


