import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect(process.env.DB).
    then(result=>{console.log(`DB connected successfully ........`);}).
    catch(err=>`fail to connect on DB ....... ${err}`)
}