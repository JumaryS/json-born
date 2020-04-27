const fs = require('fs'){

//NEED AYUDA PLEASE//

// fs.readFile('./tests.json', function(error, data) {
//     if (error) {
//       throw error;
//     }
  
//     const actualObj = JSON.parse(data);
//     console.log(actualObj)
//   })

if(process.argv[2] === 'GET'){
    fs.readFile('./users.json', function(error, data) {
    if (error) {
        throw error;}
    // } else if ()

const actualObj = JSON.parse(data);
    console.log(actualObj)