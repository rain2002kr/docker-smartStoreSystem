const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); 

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
})



