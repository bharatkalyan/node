module.exports = app => {
  const controller = require("../controller/index");
  var router = require("express").Router();
  router.get("/", ()=>{
    controller.callExternalApiUsingHttp
  });
};