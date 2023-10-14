const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    userName: {
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
    refreshToken: {
        type: String
    }
});

const User = model("user", userSchema);

module.exports = User;