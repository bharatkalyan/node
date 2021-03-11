
const https = require('https');
const config = require("../config/config.js");


exports.callExternalApiUsingHttp = (callback) => {
    https.get( config.url, (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

//module.exports.callApi = callExternalApiUsingHttp;

      