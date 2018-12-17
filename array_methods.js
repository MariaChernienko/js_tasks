let arr = [1, 2, 5, 6, 5, 6];
arr.map2 = function(callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i], i, arr);
  }
  return result;
};
arr.filter2 = function(callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
arr.some2 = function(callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
arr.every2 = function(callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

arr.find2 = function(callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
    // else {
    //   return -1;    ?
    // }
  }
};
// arr.sort2 = function(callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[i+1]) {
//       let temp;
//       temp = arr[i];
//       arr[i] = arr[i+i];               ?
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }
let newArr = arr.map2(function(item, index) {
  return item + index;
});
let newArr = arr.filter2(function(item, index) {
  return item > 0;
});
let newArr = arr.some2(function(item, index) {
  return item > 3;
});
let newArr = arr.every2(function(item, index) {
  return item === 5;
});
let newArr = arr.find2(function(item, index) {
  return item < 6;
});
console.log(newArr);
