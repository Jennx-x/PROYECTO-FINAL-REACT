const mainPath = "/api";

const express = require("express");

function routerApi(app) {
  const router = express.Router();
  app.use(mainPath + "/v1", router);
}
