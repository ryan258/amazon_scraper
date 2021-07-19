const express = require('express')
const request = require('request-promise')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // "hey express, parse JSON input"

app.get('/', (req, res) => {
  // "here's that 1 route you need, you express app w/ the callback you usually need"
  // "now respond with the following when someone visits the '/' route"
  res.send('Welcome to the Amazon Scraper! 🥳')
})

app.listen(PORT, () => console.log(`Server is paying attention on port ${PORT}`)) // "Pay attention!"
