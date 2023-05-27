const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
// const DataBase_Url = "mongodb+srv://akshaymishra1228:<OpgTPlkL8iZ4ehnj>@aemtdb.dcloy9k.mongodb.net/"

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000,mongoString}`)
})