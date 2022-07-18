const express = require('express');
const path = require('path');
const app = express();
const port = 6969;
const router = require('./routes/index.js');
require('dotenv').config();

router(app);
// app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static("dist"));


app.use((req, res, next) => {
    res.sendFile("index.js", { root: __dirname });
})


app.listen(port, () => {
    console.log('Connected');
});