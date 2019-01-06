const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/apis', (req, res) => res.json({name:'Hello World!',done:'yes'}))
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
