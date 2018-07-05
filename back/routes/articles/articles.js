const express = require("express")
const jwt = require("jsonwebtoken")
const joiRegister = require("../../helpers/joiRegister.js")
const Joi = require("joi")
const jwtSecret = require("../../../jwtSecret")
const con = require("../../helpers/db.js")

const Router = express.Router()

//insert into Categories (name) values ('NOM_DE_LA_CATEGORIES');
//insert into sous_categories (name) values ('NOM_DE_LA_SOUS_CATEGORIES');
//insert into  Categories_souscategories (Categories_idCategories, sous_categories_idsous_categories) values (1,1);
// INSERT INTO articles ( titre, contenu, cible_status, date_create, visible ) VALUES ('corpalif bonjour','contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu ','user','2005-04-8 2:00:00.000','1')
// select * from articles where idarticles = '19';

Router.get("/", (req, res, next) => {
  res.send("I am in GET auth YOLO")
})
//======================{ addArticle }==========================//

//cree un JOI pour ça!!
Router.post("/addArticle", (req, res, next) => {
  console.log("REQ BODY: ", req.body)
  const sql = `INSERT INTO articles ( titre, contenu, cible_status, date_create, visible, sous_categories_idsous_categories, users_idusers ) VALUES (?,?,?,?,?,?,?)`
  const values = [
    req.body.titre,
    req.body.contenu,
    req.body.cible_status,
    req.body.date_create, //generer la date automatiqument au format DateTime
    req.body.visible,
    req.body.sous_categoriesId,
    req.body.users_idusers
  ]
  con.query(sql, values, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }
    console.log("Number of records inserted: " + result)
  })
  // console.log(values)

  return res.status(200).send({ details: "addArticle" }) //renvoyer un message pour rediriger ver la page admin article
})
//======================{ editArticle }==========================//

Router.get("/editArticle/:id", (req, res, next) => {
  console.log("id edit article", req.params.id)
  // const sql = `select  articles.idarticles, articles.titre, articles.contenu, articles.versioncourt, articles.imgurl, articles.cible_status, articles.img_caroussel, articles.in_caroussel, articles.date_create, articles.visible, articles.sous_categories_idsous_categories, articles.users_idusers, sous_categories.Categories_idCategories from articles where idarticles = '1' INNER JOIN sous_categories ON articles.sous_categories_idsous_categories = sous_categories.idsous_categories;
  // const sql = `select * from articles where idarticles =  INNER JOIN sous_categories ON sous_categories_idsous_categories = idsous_categories`;
  const sql = `select articles.idarticles, articles.titre, articles.contenu, articles.versioncourt, articles.imgurl, articles.cible_status, articles.img_caroussel, articles.in_caroussel, articles.date_create, articles.visible, articles.sous_categories_idsous_categories, articles.users_idusers, sous_categories.Categories_idCategories FROM articles INNER JOIN sous_categories ON articles.sous_categories_idsous_categories = sous_categories.idsous_categories`

  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }
    console.log("Number of records inserted: " + result)
    return res.status(200).send({ details: "editArticle", result })
  })
})

//======================{ /getArticle/cat/:id }==========================//

Router.get("/getArticle/cat/:id", (req, res, next) => {
  console.log("getArticle: ", req.params.id)
  const id = Number(req.params.id)
  const statusUsers = "user" //data a recup du token
  const sql = `SELECT * FROM articles WHERE sous_categories_idsous_categories = '${id}' AND cible_status = '${statusUsers}'`
  con.query(sql, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }
    console.log("Number of records inserted: " + result)
    return res.status(200).send(result)
  })
})

//======================{ /putArticle }==========================//
// A FAIRE  !!
//cree un JOI pour ça!!
Router.put("/putArticle", (req, res, next) => {
  console.log("REQ BODY: ", JSON.stringify(req.body.contenu))
  const cont = "yolo"
  // UPDATE articles
  // SET titre = '?', contenu = '?', cible_status = '?', date_create = '?', visible = '?', sous_categories_idsous_categories = '?',users_idusers = '?'
  // WHERE idarticles = ${req.body.id}
  const sql = `UPDATE articles 
SET titre = ?, contenu = ?, cible_status = ?, date_create = ?, visible = ?, sous_categories_idsous_categories = ?,users_idusers = ? 
WHERE idarticles = ${req.body.id}`
  const values = [
    req.body.titre,
    req.body.contenu,
    req.body.cible_status,
    req.body.date_create, //generer la date automatiqument au format DateTime
    req.body.visible,
    req.body.sous_categoriesId,
    req.body.users_idusers
  ]
  con.query(sql, values, (err, result) => {
    if (err) {
      console.log("[mysql error]", err)
    }
    console.log("Number of records inserted: " + result)
  })
  // console.log(values)

  return res.status(200).send({ details: "addArticle" }) //renvoyer un message pour rediriger ver la page admin article
})

//======================{ /enableArticle }==========================//

Router.post("/enableArticle", (req, res, next) => {
  // console.log('enable', req.body ? 1 : 0)
  let update = req.body.visible
  if (update === 1) {
    update = 0
  } else {
    update = 1
  }
  // console.log("enable :", update);

  const sql = `UPDATE articles
  SET visible = ${update}
  WHERE idarticles = ${req.body.id}`

  con.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).send({ details: "enableArticle", update })
  })
})

//======================{ /test }==========================//

Router.post("/protected", (req, res, next) => {
  const token = getToken(req)
  const objectTests = {
    //data appeler par la bdd
    test: "ok"
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(200).send({ mess: "na pas acces au donnes" })
    }
    console.log("decode", decoded)
    return res.status(200).send({ mess: "Donne du user", objectTests })
  })
})

module.exports = Router
