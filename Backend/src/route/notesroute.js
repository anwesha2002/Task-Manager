const express = require("express");
const { getnotes, createnote } = require("../controllers/notescontroller");

const route = express.Router();

route.get("/:category", getnotes);
/*route.get("/:id", getnote);*/
route.post("/", createnote);

module.exports = route;

