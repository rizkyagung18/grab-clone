const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    const data = fs.readFileSync('dummy.json')

    if(data) res.send(data.toString('utf8'))
})

app.use(express.static('public'))

app.listen(5000 || process.env.PORT, () => console.log("Server running.."))