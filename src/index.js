// import mongoose from "mongoose";
// import { databaseName } from "./constant.js";

// ;(async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
//     } catch (error) {
//         console.log("error" , error)
//     }
// })()


// require(dotenv).config({path : './env'})

import dotenv from 'dotenv'

import {connectDatabase} from './db/index.js' 

dotenv.config({path : './env'})

connectDatabase()