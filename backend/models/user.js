const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    status: {
        type: String
    },
},{
    timestamps: true
})


const User = mongoose.model('user_credential',UserSchema);

module.exports = User