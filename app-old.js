const http = require('http');

http.createServer((req, res) => {


        res.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
                nombre: 'maycol',
                apellido: 'suarez',
                url: req.url
            }
            // res.write('hey world');
        res.write(JSON.stringify(salida));
        res.end();


    })
    .listen(8080)


console.log('escuchando en el puerto 8080');