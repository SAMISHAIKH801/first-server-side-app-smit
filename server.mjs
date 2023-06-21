console.log("this is express server");

import express from 'express';
const app = express()

app.get('/', (req, res) => {
  console.log('hello world!' , new Date())
  res.send('Hello World!' + new Date() )
})

const PORT = process.env.port || 4000

app.listen(PORT, () => {
  console.log(`Example server listening on port ${port}`)
}) 