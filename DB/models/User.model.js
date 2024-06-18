import mongoose, { Schema, Types, model } from "mongoose";

const userSchema = new Schema({
    
    userName: {
        type: String,
        required: [true, 'userName is required'],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char'],
        lowercase: true
    },
    socketId:{
        type: String,
    },
    meetingId:{
        type:Types.ObjectId,
        ref:"Meeting"
    },
    joined:{
        type:Boolean,
        required:true,

    },
    isAlive:{
        type:Boolean,
        required:true,
    }
}, {
    timestamps: true
});

const userModel = mongoose.models.User || model('User', userSchema);
export default userModel;
