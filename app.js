const http = require('http');
const fs = require('fs');
const qs = require('node:querystring');


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

        // let b = {
        //   title : title,
        //   content : content
        // }

        // let c = JSON.stringify(b, null, 2);

        // fs.writeFile('./data.html', c, (err) => {
        //   if(err) {
        //     console.log("Error")
        //     return;
        //   }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end();

        // })
        console.log(a)

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