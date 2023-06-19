const express = require("express");
const router = express.Router();
const blaguesController = require("./../controllers/blagues");

router.get("/blagues", blaguesController.findAll);

router.get("/blagues/:id", blaguesController.findByIdOrRandom);

module.exports = router;
