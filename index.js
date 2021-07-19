const express = require('express')
const request = require('request-promise')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

const baseUrl = `http://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&autoparse=true`

app.use(express.json()) // "hey express, parse JSON input"

app.get('/', (req, res) => {
  // "here's that 1 route you need, you express app w/ the callback you usually need"
  // "now respond with the following when someone visits the '/' route"
  res.send('Welcome to the Amazon Scraper! 🥳')
})

// GET product details
app.get('/products/:productId', async (req, res) => {
  // "dynamic placeholder?" - 'yep, :productId is what you're looking for'
  const { productId } = req.params

  try {
    // git info for a specific product
    const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
    // dp = product details
    res.json(JSON.parse(response)) // get the json data string from the response and parse it into a usable JS object
  } catch (error) {
    // console.error(error)
    res.json(error)
  }
})

// GET product reviews
app.get('/products/:productId/reviews', async (req, res) => {
  // "dynamic placeholder?" - 'yep, :productId is what you're looking for'
  const { productId } = req.params

  try {
    // git info for a specific product
    const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`)
    // dp = product details
    res.json(JSON.parse(response)) // get the json data string from the response and parse it into a usable JS object
  } catch (error) {
    // console.error(error)
    res.json(error)
  }
})

// GET product offers
app.get('/products/:productId/offers', async (req, res) => {
  // "dynamic placeholder?" - 'yep, :productId is what you're looking for'
  const { productId } = req.params

  try {
    // git info for a specific product
    const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
    // dp = product details
    res.json(JSON.parse(response)) // get the json data string from the response and parse it into a usable JS object
  } catch (error) {
    // console.error(error)
    res.json(error)
  }
})

app.listen(PORT, () => console.log(`Server is paying attention on port ${PORT}`)) // "Pay attention!"
