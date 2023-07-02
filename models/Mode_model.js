const mongoose = require('mongoose');

const mode_schema = new mongoose.Schema(
    {
        image : {
            type : String,
            required : true,
        },
        name : {
            type : String,
            required : true,
        },
    }
);

const Mode  = mongoose.model("Mode" , mode_schema);
module.exports = Mode;