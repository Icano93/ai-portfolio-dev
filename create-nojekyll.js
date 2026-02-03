const fs = require('fs');
const filePath = './out/.nojekyll';

fs.writeFile(filePath, '', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('.nojekyll file created');
});