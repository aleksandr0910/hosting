const express = require("express")
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));

app.get("/", function(req,res){
    res.render("index")
})

app.get("/github", function(req,res){
    res.render("github")
})
app.get("/heroku", function(req,res){
    res.render("heroku")
})

app.listen(3000, (req,res) => {
    console.log("port 3000 started")
})