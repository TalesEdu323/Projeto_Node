
const cors = require('cors')
const express = require('express')
const app = express ()
app.use(cors())

app.get('/teste' , (req, res) => {
    return res.status(200).send({
        mensage:  'ok, deu bom '
    });
});


module.exports= app;


const http = require ('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);




