const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());

// todo -- dynamic routes
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));

// todo -- database connection --
mongoose.set('strictQuery',false);
mongoose.connect(process.env.DATABASE_URL, {

}).then(() => console.log("Database connection succesfully...")).catch((err) => console.log("error connection to mongodb..."))



// todo -- Server --
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
