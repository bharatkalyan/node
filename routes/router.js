module.exports = app => {
  const controller = require("../controller/index");
  var router = require("express").Router();
  router.get("/", (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    controller.callExternalApiUsingHttp
  });
};