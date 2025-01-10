import { createClient } from '@sanity/client'
import express from 'express'

import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const client = createClient({
  projectId: process.env.SANITY_API_ID,
  dataset: process.env.SANITY_API_DATASET || 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

app.get('/', (req, res) => {
  res.send('Sanity API Server is running!')
})

app.post('/query', async (req, res) => {
  const { query, params } = req.body
  try {
    const data = await client.fetch(query, params || {})
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Sanity API Server is running on port ${port}`)
})
