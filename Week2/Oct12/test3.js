var arr = [
    [1,2,3],
    [1,2,3],
    [4,5,6]
  ];
  
  var newArr = [];
  arr.forEach(function(item) {
    item = item.reduce(function(a, b) {
      return a + b;
    });
    newArr.push([item]);
  });
  let i=0;
  let x=0;
  while(i<newArr.length){
   x=x+newArr[i][0];
   i++;
  }
  console.log(x);
  