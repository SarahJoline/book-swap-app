const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("./client"))

const apiRoutes = require("./routes/apiRoutes")
app.use("/", apiRoutes)

app.listen(PORT, () => {
  console.log(`listening on local: http://localhost:${PORT}`)
})
