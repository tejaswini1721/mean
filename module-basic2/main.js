const http = require("http");
const mod = require("./1");

http
    .createServer((req, res) => {
        // CORS ENABLED
        // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        res.setHeader("Access-Control-Allow-Origin", "*");

        const myresponse = JSON.stringify(mod.list);

        // to send the response to the client
        res.end(myresponse);
    })
    .listen(5600);