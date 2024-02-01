const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000
const mongoose = require('mongoose');
const connectDB = require('./connectDB');
connectDB();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const verifyJWT = require("./middleware/verifyJWT");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());


app.use('/teacher', require("./route/refreshTokenRoute"));

app.use("/teacher", require("./route/teacherRoute"));

app.use(verifyJWT);




mongoose.connection.once('open', () => {
console.log('Database connection successful');
app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
})
