require("dotenv").config();
const express = require("express");
const mongoose = require('Mongoose');
const path = require("path");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "client/public")));

//------------ VIEWS ------------//
app.get("/", (req,res) => {
    res.redirect(`/home`);
});

app.get("/landing", (req,res) => {
    res.redirect(`/home`);
});

app.get("/login", (req,res) => {
    res.redirect(`/home`);
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (res,req) => {
    res.render("/contact");
});

//------------ ROUTES ------------//












//connect to database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( () => {
    console.log('Connected to DB');
})
.catch( (err) => {
    console.log(err);
})

const port = process.env.PORT || 3005
app.listen(port, () => {
    console.log(`server up, listening on ${port}, http://localhost:${port}`);
});

