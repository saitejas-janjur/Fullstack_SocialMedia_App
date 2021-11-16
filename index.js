const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_ULR, {useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log("Connected to MongoDB")
});

app.listen(8800,()=>{
    console.log("Backend is running  dhdht ht hfh")
})