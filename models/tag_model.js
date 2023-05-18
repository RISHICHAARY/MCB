const mongoose = require('mongoose');

const tag_schema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
    }
);

const Tag  = mongoose.model("Tag" , tag_schema);
module.exports = Tag;