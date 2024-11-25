const mongoose = require('mongoose');

let assignmentModel = mongoose.Schema({
    Name: String,
    Time: String,
    Date: String,
    
},
{
    collection: "assignments"
}
);

module.exports = mongoose.model('Assignment', assignmentModel);