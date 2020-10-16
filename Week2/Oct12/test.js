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
  
  console.log(myObj);