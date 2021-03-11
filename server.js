const nodeApi = require('./controller');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const PORT = 3002;

app.use('/countries', (req,res)=>{
    nodeApi.callExternalApiUsingHttp(function(response){
                        res.send(response);
                        res.end();
                    });
});
app.get('/', (req,res)=>{
    res.send('node')
})

app.listen(PORT, ()=>console.log(`server running on http ${PORT}`));