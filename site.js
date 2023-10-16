const express = require('express');
const app = express();
const port = 3002;
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

//serves homeSite.html and sets first-party cookie
app.get('/',function(req,res){
    res.cookie("first-party","777");
    res.sendFile(path.join(__dirname+"/office.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
