const express = require("express");
const database = require("./config/database.js");
const U_router = require("./routers/user.router.js");
const cookie = require("cookie-parser");




const app = express();

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Api', U_router);



app.listen(8088, (err) => {
    database();
    if (!err) {
        console.log("server start: http://localhost:8088");
    }
});