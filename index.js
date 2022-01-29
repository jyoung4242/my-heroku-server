const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.status(200).send("Hello world")
})

app.get("/test", (req, res) => {
  res.status(200).send("TESTING SUCCESSFUL")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
