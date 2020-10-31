//*****--------------------------------------------------------------*****
// JSON Parse and Stringify (video 16)
const url = "https://www.discoveryvip.com/shared/json.php?f=peopledata1";
const output = document.querySelector(".output");
fetch(url)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.data);
    data.data.forEach(function (val) {
      console.log(val.firstName + " " + val.lastName);
      output.innerHTML += val.firstName + " " + val.lastName + "<br>";
    });
  })
  .catch(function (err) {
    console.warn(err);
  });

//*****--------------------------------------------------------------*****
// JSON Parse and Stringify (video 14)
// const test = {
//     "people": [
//       {
//         "first": "Laurence"
//         , "last": "Svekis"
//       }
//       , {
//         "first": "Laurence"
//         , "last": "Svekis"
//       }
//       , {
//         "first": "Laurence"
//         , "last": "Svekis"
//       }
//       , {
//         "first": "Laurence"
//         , "last": "Svekis"
//       }
//     ]
//   };

// //*****--------------------------------------------------------------*****
// // JSON Parse and Stringify (video 12)
// const friend1 = {
//     name: 'Laurence'
// };
// const friend2 = {
//     name: 'John'
// };
// const friend3 = {
//     name: 'Jane'
// };
// const friend = {
//     name: 'Kris Frank',
//     age: 40,
//     gender: 'male',
//     location: {
//         city: 'Paris',
//         country: 'France',
//         address: '50 franklin d roosevelt'
//     }
// }

// const friends = [friend1, friend2, friend3];
// console.log(friends);
// console.log(JSON.stringify(friends));
// const str = '[{"name":"Laurence"},{"name":"John"},{"name":"Jane"}]';
// const fr2 = JSON.parse(str);
// console.log(str);
// console.log(fr2);
// let html = "";
// fr2.forEach(function(val){
//    html += val.name + "<br>";
// });
// // fr2[0].name = "Mike";
// // fr2[1].name = "Kris";
// // fr2[2].name = "Dave";
// // const newfr2 = JSON.stringify(fr2)
// document.querySelector(".output").innerHTML = html ;

// //*****--------------------------------------------------------------*****
// //Iterate Object Contents (video 10)
// const friend1 = {
//     name: 'Laurence'
// };
// const friend2 = {
//     name: 'John'
// };
// const friend3 = {
//     name: 'Jane'
// };
// const friend = {
//     name: 'Kris Frank',
//     age: 40,
//     gender: 'male',
//     location: {
//         city: 'Paris',
//         country: 'France',
//         address: '50 franklin d roosevelt'
//     }
// }

// const friends = [friend1, friend2, friend3];
// console.log(friends);
// for(const[key,value] of Object.entries(friends)){
//     console.log(key);
//     friends[key]["Last Name"] = "Smith";
// }

// for (const key in friend){
//     console.log(key);
// }

// console.log(Object.entries(friend));
// for(const[key,value] of Object.entries(friend)){
//     console.log(key);
//     console.log(value);
// }

// //*****--------------------------------------------------------------*****
// //Iterate Array Contents (video 8)
// const friend1 = {
//     name: 'Laurence'
// };
// const friend2 = {
//     name: 'John'
// };
// const friend3 = {
//     name: 'Jane'
// };
// const friendList = [friend1, friend2];
// friendList.push(friend3);
// console.log(friendList);

// for (let i=0;i<friendList.length;i++){
//     console.log(friendList[i].name);
// }

// friendList.forEach(function(item, index, array){
//     console.log(item.name);
// })

// // returns index
// for (ind in friendList){
//     console.log(friendList[ind].name);
// }

// const friends = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
// const newArr = [];

// friends.forEach(function(item){
//     console.log(item);
//     let temp={
//         name: item
//     }
//     newArr.push(temp);
// })
// console.log(friends);
// console.log(newArr);

// //*****--------------------------------------------------------------*****
// //Javascript Array (video 6)
// const friends = ['Laurence', 'John', 'Steve', 'Linda', 'Jane'];
// console.log(friends);
// console.log(friends[2]);

// const friend1 = {
//     name: 'Laurence'
// };
// const friend2 = {
//     name: 'John'
// };

// const friendList = [friend1, friend2];
// console.log(friendList);
// document.querySelector(".output").textContent = friendList[1].name;
// //document.querySelector(".output").textContent = friendList[1]['name'];

// //*****--------------------------------------------------------------*****
// //Javascript Objects (video 4)
// const friend = {
//     name: 'Kris Frank',
//     age: 40,
//     gender: 'male',
//     location: {
//         city: 'Paris',
//         country: 'France',
//         address: '50 franklin d roosevelt'
//     }
// }

// console.log(friend);

// console.log(friend.name);
// document.querySelector(".output").textContent = friend['location'].country;
