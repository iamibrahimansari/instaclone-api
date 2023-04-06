const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const {router} = require('./routes/user');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3500;

// middleware
app.use(cors());
app.use(bodyParser.json());

// db connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(`mongodb+srv://iamibrahimansari:${process.env.PASSWORD}@insta-clone.hoodkyt.mongodb.net/?retryWrites=true&w=majority`);
    console.log('Database Connected');
}

app.use('/user', router);

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));