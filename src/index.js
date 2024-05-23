// approach: 2
// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from "./db/connect.js";


dotenv.config({ path: './env' })
// console.log(process.env);

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Server ERR : ", error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB ERR : ", err);
    })






























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
        console.log("MONGODB CONNECTION ERR: ", error);
        throw error
    }
})()

*/