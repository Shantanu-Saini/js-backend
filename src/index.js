// approach: 2
import connectDB from "./db/connect";

connectDB();    






























/*
// approach: 1

import mongoose from 'mongoose';
import express from 'express';
import { DB_NAME } from './constants';

const app = express();


; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERR:", error);
        throw error
    }
})()

*/