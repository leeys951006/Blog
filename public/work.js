let fs = require('fs');
let data = fs.readdirSync(`./data`);
// const root = document.getElementById('root');
// const listdata = document.createElement('li');
// root.appendChild(listdata);
// console.log(data)
let datalist = data.forEach(function(data) {
  console.log(data)
})
// console.log(datalist)
// console.log(datalist)
