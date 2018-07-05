const express = require("express")
const jwt = require("jsonwebtoken")
const joiRegister = require("../../helpers/joiRegister.js")
const Joi = require("joi")
const jwtSecret = require("../../../jwtSecret")
const con = require("../../helpers/db.js")

const Router = express.Router()

Router.get("/", (req, res, next) => {
  res.send("I am in GET auth YOLO")
})
// =============== RecupUsers================/

Router.get("/getUser", (req, res, next) => {
  console.log("getUser: ")
  // const id = Number(req.params.id)
  // const statusUsers = "user" //data a recup du token
  const sql = `SELECT * FROM users WHERE statussocial= '0';`
  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }
    console.log("Number of records inserted: " + result)
    return res.status(200).send(result)
  })
})
// ===============validateUsers================/
// `UPDATE users SET statussocial = '1', WHERE id = 2;`

Router.post("/validateUsers/:id", (req, res) => {
  console.log("validateUsers: ", req.params.id)
  const id = Number(req.params.id)

  // const statusUsers = "user" //data a recup du token
  const sql = `UPDATE users SET statussocial = '1' WHERE idusers=${id};`
  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }
    console.log("Number of records inserted: " + result)
    return res.status(200).send({ result, response: "ok" })
  })
})

module.exports = Router
