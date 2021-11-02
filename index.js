const port = 3012; 
var express = require('express');
var app = express();

app.listen(port, function () {
    console.log(`Servidor corriendo en el puerto ${port}!`);
    app.post("/status", function(req, res) {
        res.send(`Servidor corriendo en el puerto ${port}!`);
    });
}); 


