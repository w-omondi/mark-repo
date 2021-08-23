const express = require('express');
const bodyparser = require('body-parser');

//create app
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));



app.get(`/`, (req, res) => {
    res.sendFile(__dirname + '/pages/index.htm');
})
app.get(`/users`, (req, res) => {
    res.sendFile(__dirname + '/pages/user.htm');
})
app.get(`/vender`, (req, res) => {
    res.sendFile(__dirname + '/pages/vender.htm');
})
app.get(`/about`, (req, res) => {
    res.sendFile(__dirname + '/pages/about.htm');
})

app.get(`/customer`, (req, res) => {
    res.sendFile(__dirname + '/pages/customer.htm');
})
app.get(`/orders`, (req, res) => {
    let data = [
        {name: "magazine",q: 23,phone: "0799623291"},
        {name: "magazine",q: 23,phone: "0799623291"},
        {name: "magazine",q: 23,phone: "0799623291"},
        {name: "magazine",q: 23,phone: "0799623291"},
        {name: "magazine",q: 23,phone: "0799623291"},
    ]
    res.send(JSON.stringify(data));
})

app.post(`/neworder`, (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

//creates server
app.listen(5000, (err) => {
    if (err) throw err;
    console.log("Listenning to marks server at port 5000")
})
