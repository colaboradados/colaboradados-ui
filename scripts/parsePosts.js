const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../src/data/posts');

fs.readdir(directoryPath, function(err, files) {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  files.forEach(function(file) {});
});
