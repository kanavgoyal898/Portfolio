import { createClient } from '@sanity/client'
import express from 'express'

import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import job from './cron.js'
job.start();

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const client = createClient({
  projectId: process.env.SANITY_API_ID,
  dataset: process.env.SANITY_API_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
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

app.get("/pictures", async (req, res) => {
  try {
    const pictures = await client.fetch(`
      *[_type == "picture"] {
        "id": _id,
        "name": name,
        "priority": priority,
        "url": media.asset->url
      }
    `);
    res.status(200).json(pictures)
  } catch (error) {
    console.error("Error fetching images from Sanity:", error)
    res.status(500).json({ error: "Failed to fetch images" })
  }
})

app.listen(port, () => {
  console.log(`Sanity API Server is running on port ${port}`)
})
