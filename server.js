const express = require("express")
const app = express()
const PORT = process.env.PORT || 7000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("./client"))

const apiRoutes = require("./routes/api/apiRoutes")
app.use("/", apiRoutes)

const clientRoutes = require("./routes/client/clientRoutes")
app.use("/", clientRoutes)

app.listen(PORT, () => {
  console.log(`listening on local: http://localhost:${PORT}`)
})
