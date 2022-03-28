const express = require("express");
const port = 8000;

const app = express();

// Database Config
require("./config/mongodb.config");



app.get("/", (req, res)  => {
    res.send("Welcome to chai api charcha");
})

app.listen(port, () =>{
    console.log("Server running on 8000");
})