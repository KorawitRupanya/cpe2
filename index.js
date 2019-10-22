const express = require('express')
const app = express()
const port = 15684

app.get('/', (req, res) =>
  res.send('Greetings from Korawit...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
