function sumFor(list){
  let total = 0;
  for (let iter = 0; iter < list.length; iter ++){
    total += list[iter];
  }
  return total;
}

function sumWhile(list){
  let total = 0;
  let iter = 0;
  while(iter < list.length){
    total += list[iter];
    iter ++;
  }
  return total;
}

function sumRecursion(list){
  if (list.length === 1){
    return list[0];
  } else {
    return list.pop() + sumRecursion(list);
  }
}

function sumTheSimpleWay(list){
  let total = _.reduce(list,
      function (mem, val) {
        return mem + val;
      }, 0);
  return total;
}

const numList = [1,2,3,4,5,6];
console.log("sumFor: ", sumFor(numList));
console.log("sumWhile: ", sumWhile(numList));
console.log("sumRecursion: ", sumRecursion(numList));
console.log("sumTheSimpleWay: ", sumTheSimpleWay([1,2,3,4,5,6]));
