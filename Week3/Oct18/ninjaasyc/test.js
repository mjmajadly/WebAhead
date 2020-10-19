
//  video #5 and above, below this line
const getTodos = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            callback("error happened somewhere", undefined);
        }
    });
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', 'todos.json');
    // request.open('GET', chrome.extension.getURL('todos.json'), true);
    request.send();
};

getTodos((err, data) => {
    console.log("callback working");
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
// up to video ## above this line








// // up to video #4 below this line
// const getTodos = (callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText);
//         }
//         else if (request.readyState === 4) {
//             callback("error happened somewhere", undefined);
//         }
//     });
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     request.send();
// };

// getTodos((err, data) => {
//     console.log("callback working");
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });
// // up to video #4 above this line
