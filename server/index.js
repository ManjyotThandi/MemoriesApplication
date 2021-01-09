import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes.js/posts';


const app = express();


dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// use express middleware to use Router
app.use("/posts", postRoutes);

// MONGO db atlas connection
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gaer5.mongodb.net/<dbname>?retryWrites=true&w=majority`
const PORT = process.env.PORt || 5000;

// use mongoose to connect to db
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(process.env.USERNAME)
        console.log(error.message)
    });

// These are so we don't get any warnings in console. This as well as useNewUrlParse and useUnified Topology
//Update, this throws an error so just commenting it out for now
//mongoose.set('useFindandModify', false);