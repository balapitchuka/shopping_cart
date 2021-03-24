import express from 'express'
//const express = require('express')
import dotenv from 'dotenv'
import products from './data/products.js'
// const products = require('./data/products')
import connectDB from './config/db.js'


dotenv.config()
connectDB()

const app = express()

app.get('/', (req,res) => {
    res.send('Api is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})