const { Router } = require("express");
const { SearchOperations } = require("../controllers/ads.controller");

const app = Router();
app.get("/search", SearchOperations);

module.exports = app;