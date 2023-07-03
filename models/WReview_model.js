const mongoose = require('mongoose');

const wreview_schema = new mongoose.Schema(
    {
        image : {
            type : Array,
        },
        name : {
            type : String,
            required : true,
        },
        loc : {
            type : String,
            required : true,
        },
        rev : {
            type : String,
            required : true,
        },
        rating : {
            type : Number,
            required : true,
        },
    }
);

const WReview  = mongoose.model("WReview" , wreview_schema);
module.exports = WReview;