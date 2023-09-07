const express = require("express");
const route = express.Router();

const { getnotes, createnote , updatenote, deletenote} = require("../controllers/notescontroller");



route.get("/", getnotes);
route.post("/", createnote);
route.patch("/:id", updatenote);
route.delete("/:id", deletenote);

module.exports = route;

