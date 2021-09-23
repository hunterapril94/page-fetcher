const fs = require('fs')
const request = require('request');
const webpage = process.argv[2]
const file = process.argv[3]
const content = request(webpage, function (error, response, body) {
  console.error('error:', error);
  fs.writeFile(file, body, err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${file}`)
    }
  })
});
