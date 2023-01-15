import mongoose from "mongoose";
import {MONGO_CONNECTION_URL} from "./index";
mongoose.connect(MONGO_CONNECTION_URL);

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error Connectiong to Database!"));

db.once('open', function(){
    console.log("Successfully Connected to DB!");
});

export default db;