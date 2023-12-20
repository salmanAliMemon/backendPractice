import mongoose from "mongoose";
import { databaseName } from "../constant.js";

export const connectDatabase = async ()=>{
    try {
    const databaseInistance = await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
        console.log(databaseInistance.connection.host , "databaseInistancedatabaseInistance")
    } catch (error) {
        console.log("database Connection error" , error)
    }
}