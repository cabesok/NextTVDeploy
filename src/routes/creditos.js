const { Router } = require("express");
const express = require("express");
const multer = require("multer");
//const path = require("path");
const router = express.Router();
/* const product = require("../controllers/product"); */
const creditosController = require("../controllers_db/creditosController");
const authOk = require("../middlewares/authOk");



// Rutas para base da datos SQL

router.get("/creditos", authOk, creditosController.creditos);
router.get("/creditos/buscar", authOk, creditosController.buscar);
router.get("/creditos/nuevocredito", authOk, creditosController.nuevocredito);
router.get("/creditos/utilizar/:id", authOk, creditosController.utilizar);
router.get("/creditos/modificarcredito/:id", authOk, creditosController.modificarcredito);


router.put("/creditos/actualizar/:id", creditosController.actualizar)
router.post("/creditos/agregar", creditosController.agregar);
router.post("/creditos/filtrar", /* authOk, */ creditosController.creditosFiltrar); 

router.delete("/creditos/delete/:id", creditosController.delete);
router.put("/creditos/utilizar/:id", creditosController.utilizarBack);
router.put("/creditos/nopublicar/:id", creditosController.noPublicar);



module.exports = router;