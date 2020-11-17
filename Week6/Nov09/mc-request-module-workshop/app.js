// 'use strict';
// const http = require('http');

// //It should take one argument: the url to make the request to. It should return a promise.
// const myRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     http.get(url, (response) => {
//       let data = '';
//       response.on('data', (chunk) => {
//         data += chunk;
//       });
//       response.on('end', () => {
//         const output = JSON.parse(data);
//         const statusCode = response.statusCode;
//         console.log('1 ' + output);
//         console.log('2 ' + statusCode);
//         if (statusCode !== 200) {
//           reject(new Error('TTTTEEEBATATATA'));
//         }
//         resolve({ statusCode, body: output });
//       });
//     });

//     // // after 1 second signal that the job is done with the result "done"
//     // setTimeout(() => resolve('done'), 1000);
//     // // after 1 second signal that the job is finished with an error
//     // setTimeout(() => reject(new Error('Whoops!')), 1000);
//   });
// };

// module.exports = myRequest;
