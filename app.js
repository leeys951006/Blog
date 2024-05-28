const http = require('http');
const fs = require('fs');

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

    if(req.url === "/work.js") {
      const work3 = fs.readFileSync("./public/work.js", "utf8");

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/javascript; charset=uft-8');
      res.write(work3);
      res.end();
    }
    console.log(req.url)
  }
});

const PORT = 3000;
server.listen(PORT, function(err) {
  if(err) {
    console.log(err);
  }
  console.log("서버 돌아감")
  console.log(`http://localhost:${PORT}`);
})