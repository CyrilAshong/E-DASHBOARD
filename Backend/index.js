const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = 5000;

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/e-comm")
    
}



app.listen(5000);