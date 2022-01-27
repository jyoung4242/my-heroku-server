const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.listen(port, () => {
  .get('/', (req, res) => res.render('pages/index'))
  console.log(`Example app listening on port ${port}`)
})
