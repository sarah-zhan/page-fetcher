const request = require('request');
const fs = require('fs');

const fetcher = function (source, filePath) {

  request(source, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the homepage.
    fs.writeFile(filePath, body, 'utf8', (error, content) => {
      if (error) throw error;
      console.log(content);
  
    });
  });

};
  
fetcher('http://www.example.edu', './test.txt')

// fs.writeFile('./test.txt', 'testing', (err) => {
//   if (err) throw err;
//   console.log('It has been saved.')
// })

