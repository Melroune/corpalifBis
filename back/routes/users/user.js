const express = require("express")
const jwt = require("jsonwebtoken")
const joiRegister = require("../../helpers/joiRegister.js")
const Joi = require("joi")
const jwtSecret = require("../../../jwtSecret")
const con = require("../../helpers/db.js")
const config = require('config')
const nodemailer = require('nodemailer');

const Router = express.Router()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'test.corpalif@gmail.com',
         pass: 'CorpalifSara'
     }
 })

Router.get("/", (req, res, next) => {
  res.send("I am in GET user YOLO")
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

Router.put("/validateUsers/:id", (req, res) => {
  const id = Number(req.params.id)
  const token = jwt.sign({id: req.params.id}, config.get('jwtPrivateKey')) // création d'un token temporaire

  const sql = `UPDATE users SET statussocial='1', fgpasword='${token}' WHERE idusers=${id};`
  const getEmail = `SELECT * FROM users WHERE idusers=${id};`

  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }

    con.query(getEmail, (err, res) => {
      console.log(res[0].email)
      const mailOptions = {
        from: 'test.corpalif@gmail.com', // sender address
        to: res[0].email, // list of receivers
        subject: 'Changement Mot de passe', // Subject line
        html: `<p>Welcome to corpalif cliquez ici pour changer votre mot de passe http://localhost:3000/users/password/${token}</p>`
      }
    
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     })
    })

      
    
    return res.status(200).send({ result, response: "ok" })
  })
  

})

module.exports = Router


// UPDATE users SET statussocial='0', fgpasword='0' WHERE idusers=15;
