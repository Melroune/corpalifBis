const express = require("express")
const con = require("../../helpers/db.js")

const Router = express.Router()

Router.get("/", (req, res, next) => {
  res.send("I am in GET directory YOLO")
})

module.exports = Router
