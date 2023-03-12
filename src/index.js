const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.get('/', (req,res) => {
    return res.send('Hello world');
})

mongoose.connect('mongodb+srv://hyuse202:huydepzai20022006@cluster0.gs3xbl9.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected mongodb')
})
.catch((err) => {
    console.log(err);
})
app.listen(port, () => {
    console.log('Server is running...');
});
