const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// app.engine('html', require('ejs').renderFile);
// app.set()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 
//  app.get('/apis', (req, res) => res.json({name:'Hello World!',done:'yes'}))
app.get('/', (req, res) => res.render('home'))
app.get('/login', (req, res) => res.render('login'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
