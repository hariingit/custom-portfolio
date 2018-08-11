/* global __dirname */
/* eslint no-undef: "error" */

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('server/dist'))
app.get('/api', (req, res) => res.json({ somthing: 'hello' }))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
