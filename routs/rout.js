const express = require("express");
const { check } = require("../controler/test");
const router = express.Router();

router.get("/check", check);




module.exports = router;