require("dotenv").config();
const express = require("express");
const app = express();
const port_num = process.env.PORT;

app.listen(port_num, ()=>{
    console.log("Backend is running successfully on port " + port_num)
});