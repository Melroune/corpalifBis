const express = require("express")
const jwt = require("jsonwebtoken")
const joiRegister = require("../../helpers/joiRegister.js")
const Joi = require("joi")
const jwtSecret = require("../../../jwtSecret")
const con = require("../../helpers/db.js")
const config = require('config')
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        html: `<p>Welcome to corpalif cliquez ici pour changer votre mot de passe http://localhost:3000/password?token=${token}</p>`
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


// ===============User create password after receiving email ================/

Router.put("/createPassword", (req, res) => {
  const password = req.body.user.password
  const token = req.body.user.token
  console.log('password ' + password)
  console.log('token ' + token)

  bcrypt.hash(password, saltRounds)
  .then(hash => {
    const sql = `UPDATE users SET password='${hash}', fgpasword='0' WHERE fgpasword='${token}';`
  
    con.query(sql, (err, result) => {
      if (err) throw err
    return res.status(200).send({ mess: "Mot de passe créé" })
  })
 })
})

// ===============User login with email and password ================/
Router.post('/login', (req, res) => {
  console.log('BODY ' + req.body.member)
  const email = req.body.member.email
  const password = req.body.member.password
  console.log('email ' + email)
  console.log('password ' + password)
  const sql = `SELECT * FROM users WHERE email='${email}';`
  console.log('SQL ' + sql)
  
    con.query(sql, async (err, result) => {
      const user = await result
      if (err) {
      console.log("[mysql error]", err)
      return res.status(404).send('No user with this email')
      }
      console.log(user)
       if (!user[0]) return res.status(404).send('No user with this email') // sinon error
       const validPassword = await bcrypt.compare(req.body.member.password, user[0].password) // verif password = password db avec bcrypt
       console.log('validPassword ' + validPassword)
       if (!validPassword) return res.status(400).send('Invalid email or password.') // sinon error
       const token = jwt.sign({id: user[0].id}, config.get('jwtPrivateKey')) // créé token avec l'id de l'user et la clé
       console.log('token '+ token)
       res.header('x-auth-token', token).send('User connected') // renvoi le token dans le header
    })
})
  



module.exports = Router


