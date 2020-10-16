let data = [
    {
      country: 'China',
      pop: 1409517397,
    },
    {
      country: 'India',
      pop: 1339180127,
    },
    {
      country: 'USA',
      pop: 324459463,
    },
    {
      country: 'Indonesia',
      pop: 263991379,
    }
  ]
  
  let myObj = data.reduce((obj, value) => {
    obj[value.country]=value.pop;
    return obj;
  },{});

let myArray=[];
let myObjKeys=Object.keys(myObj);
myObjKeys.forEach(key=>{
  let smallObj={};
  smallObj[key]=myObj[key];
  myArray.push(smallObj);
});
let i=0;
while(i<myArray.length){
 console.log(myArray[i]);
 i++;
}
