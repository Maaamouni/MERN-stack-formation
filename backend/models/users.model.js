// model = schemca en bd

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    firstname:{
        type:String,
        required: true
    },
    lastrname:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },

}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema)

export default User;