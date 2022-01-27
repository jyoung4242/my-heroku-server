const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => res.render("pages/index"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
