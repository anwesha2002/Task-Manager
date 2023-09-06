const express = require("express");
const dotenv = require("dotenv").config();
const notes = require("./route/notesroute");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
app.use("/api/notes", notes);

module.exports = app;

