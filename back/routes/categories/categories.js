const express = require("express")
const jwt = require("jsonwebtoken")
const joiRegister = require("../../helpers/joiRegister.js")
const Joi = require("joi")
const jwtSecret = require("../../../jwtSecret")
const con = require("../../helpers/db.js")

const Router = express.Router()

// select * from Categories
Router.get("/", (req, res, next) => {
  res.send("I am in GET cat YOLO")
})

Router.get("/getCat", (req, res, next) => {
  const sql = `select * from Categories`
  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err);
    }
    // console.log("Number of records inserted: " + result);
    return res.status(200).send({ details: "getCat", result: result });
  });
   
})

Router.get("/getSousCat", (req, res, next) => {
  const sql = `select * from sous_categories`;
  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err);
    }
    // console.log("Number of records inserted: " + result);
    return res.status(200).send({ details: "getSousCat", result: result });
  });})


module.exports = Router