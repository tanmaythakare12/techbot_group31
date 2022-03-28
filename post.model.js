const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./user.model');

const orderSchema = new Schema({
    description: {
        type: Schema.Types.ObjectId,
        required: true
    },
    image: [{
        type: Schema.Types.ObjectId,
        required: true
    }],
    posted_by: {
        type: string,
        required: true,
        ref: User
    },
   
},
{ versionKey: false }
)

module.exports = Order = mongoose.model("orders", orderSchema);