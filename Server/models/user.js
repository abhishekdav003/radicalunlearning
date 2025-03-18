import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Provide name"]
    },
    email : {
        type : String,
        required : [true,"Provide name"]
    },
    role : {
        type : String,
        enum : ['ADMIN',"LEARNER","EDUCATOR"],
        // default : "USER"
    },
    country : {
        type : String,
        required : true

    },
    nativeLanguage : {
        type : String,
        required : true

    },
    topic : {
        type : String,
        required : true

    },
    expert : {
        type : String,
        required : true

    },
    coach : {
        type : String,
        required : true

    },
    about : {
        type : String,
        required : true

    },
    password : {
        type : String,
        required : true
    },

},{
    timestamps : true
})

const UserModel = mongoose.model("Users",userSchema)

export default UserModel