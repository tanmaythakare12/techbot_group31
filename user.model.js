const mongoose = require("mongoose");
const Schema = mongoose.Schema;
print("Hi");
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    profile_pic: {

        type: blob, 
        required: false

    },

    followers: {
        type: Number,
        required: true
    },

    my_following: {
        type: Number,
        required: true
    },

    
},
{ versionKey: false }
)

module.exports = mongoose.model('users', userSchema);