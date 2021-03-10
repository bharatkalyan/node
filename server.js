const nodeApi = require('./controller/index');
const express = require('express');
const http = require('http');

const app = express();
var cors = require('cors');
app.use(cors());



http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
      if(req.url === "/node"){
            nodeApi.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
}).listen(3002);


console.log("service running on 3002 port....");