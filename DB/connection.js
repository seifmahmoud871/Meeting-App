import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://seifmahmoud:Mongopass@cluster0.yrtwlkk.mongodb.net/MeetingApp').
    then(result=>{console.log(`DB connected successfully ........`);}).
    catch(err=>`fail to connect on DB ....... ${err}`)
}