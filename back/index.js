const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const cors = require("cors")
const app = express()

const db = require("./helpers/db.js")
const authRouter = require("./routes/auth/auth.js")
const articles = require("./routes/articles/articles.js")
const categories = require("./routes/categories/categories.js")
const directory = require("./routes/directory/directory.js")

const users = require("./routes/users/user.js")

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static(__dirname + "/public"));

app.use("/users", users)
app.use("/auth", authRouter)
app.use("/articles", articles)
app.use("/directory", directory)
app.use("/categories", categories)

app.get("/", (req, res) => {
  res.send("youhou")
})

app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})

let server = app.listen(process.env.PORT || 3030, () => {
  console.log("Listening on port " + server.address().port)
})
