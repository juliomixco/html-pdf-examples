const http = require("http");
const pdf = require("html-pdf");
var fs = require("fs");

const filePath = "src/pages/SimpleInvoice/index.html";
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    const html = data.toString();
    const options = {
      orientation: "portrait",
      format: "Letter",
      type: "pdf",
      margin: "0",
      header: {
        height: "0.2in",
        contents: {
          first: "<div class='top-bar'></div>",
          default: "<header></header>"
        }
      },
      footer: {
        height: "0.2in",
        contents: "<footer></footer>"
      }
    };

    pdf.create(html, options).toStream(function(err, stream) {
      if (err) {
        res.statusCode = 500;
        res.end("Error creating PDF: " + err);
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/pdf");
      stream.pipe(res);
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
