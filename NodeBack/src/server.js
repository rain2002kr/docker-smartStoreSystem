const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose");
//프로미스 중첩에 빠지지 않도록 도와줌
mongoose.Promise = global.Promise;


const app = express();
const port = 3000;

/* APP USE  */
// load the cookie-parsing middleware
app.use(cookieParser());



app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/test', function (req, res) {
    res.send('Hello TTTT World!!!!!!');
});

app.listen(port, ()=>{
    console.log("hi, this is express server")
    console.log(`server started at ${port}`);
    console.log(`Server backend listening at http://localhost:${port}`);
    connectDB();
})

function connectDB() {
    let db;
    mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
    db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
  
    db.once("open", function () {
      // we're connected!
      console.log("Connect to database sucessfully");
    });
  }

