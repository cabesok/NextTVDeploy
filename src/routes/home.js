const express = require("express");
const router = express.Router();
const authOk = require("../middlewares/authOk");


router.get("/", authOk, (req, res) => res.render("home", {style: "home.css", title: "Home"}));    


module.exports = router;