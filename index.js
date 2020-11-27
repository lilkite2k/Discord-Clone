const express = require('express')
const mongo = require('mongodb');
var bodyParser = require('body-parser')

let app = express()

app.use('/public', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.redirect('/login')
})

app.get('/login', function(req, res) {
    res.render(__dirname + "/login.html")
})

app.get('/register', function(req, res) {
    res.render(__dirname + "/register.html")
})

app.post('/loginform', function(req, res) {
    console.log(req.body.email)
})

app.post('/registerform', function(req, res) {
    
})

app.listen(8080)