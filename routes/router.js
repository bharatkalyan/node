var express = require('express');
    router = express.Router();
    const controller=require('../controller/index');
    const config = require('../config/config')

router.get('/', ()=>{
  controller.coronaResult
} );

router.get('/', function(req, res, next) {
  request({
    uri: config.url,
  }).pipe(res);
});


// console.log("host",q.host); //returns 'localhost:8080'
// console.log("pathname",q.pathname); //returns '/default.htm'
// console.log("search",q.search); //returns '?year=2017&month=february'

module.exports=router;
