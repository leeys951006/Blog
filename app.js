const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');
// const stress = require("./stress");


const server = http.createServer((req,res) => {
  if(req.method === "GET") {
    if(req.url === "/") {
      const first = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(first);
      res.end();
    }

    if(req.url === "/index.html") {
      const index1 = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(index1);
      res.end();
    }

    if(req.url === "/index.css") {
      const index2 = fs.readFileSync("./public/index.css", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css; charset=uft-8');
      res.write(index2);
      res.end();
    }

    if(req.url === "/work.html") {
      const work = fs.readFileSync("./public/work.html", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=uft-8');
      res.write(work);
      res.end();
    } 

   
    console.log(req.url)
  } else if(req.method === "POST") {
    if(req.url === "/submit") {
      let body = "";
      req.on('data',(chunk) => {
        body += chunk.toString()
      })
      req.on('end', () =>{
        let a = qs.parse(body);
        let title = a.title;
        let content = a.content;

        let b = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
        </head>
        <body>
          <h1>${title}</h1>
          <div>${content}</div>
        </body>
        </html>`

        fs.writeFile('./data/data.html', b, (err) => {
          if(err) {
            console.log("Error")
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(b);
        })
      })
    }
  }
});

const PORT = 3000;
server.listen(PORT, function(err) {
  if(err) {
    console.log('Error');
  }
  console.log("서버 돌아감")
  console.log(`http://localhost:${PORT}`);
})