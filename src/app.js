const http = require('http');
const pdf = require('html-pdf');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  fs.readFile("src/pages/simpleinvoice/index.html",(err, data) => {
      console.log('file read');
      const html = data.toString();
      const options = {
          orientation: "portrait",
          format: "Letter",
          type: "pdf",
          margin: "0"
      };
      pdf.create(html, options).toStream(function (err, stream) {
        if(err) {
            res.statusCode = 500;
            res.end('Error Generando pdf: ' + err)
        }
        console.log('Pdf generado correctamente');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/pdf');
        stream.pipe(res);       
     });      
  })

  
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});