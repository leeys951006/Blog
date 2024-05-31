let fs = require('fs');

list = '';

fs.readdir(`./data`, 'utf-8', (err, fileList) => {
  if (err) {
    console.log(err);
  } else {
    console.log(fileList[0]);
  }
});

// a.forEach((fileList) => console.log(fileList))
