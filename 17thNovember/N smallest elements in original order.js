//mysolution

function firstNSmallest(arr, n){
  var copyArr = [...arr];
  var smallArr = copyArr.sort((a, b) => a - b).slice(0, n);
  var res = [];

  function check(num, arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (num == arr[i]) {
        count++;
      }
    }

    return count;
  }
  for (var i = 0; i < arr.length; i++) {
    console.log("arr[i] : " + arr[i]);
    if (
      smallArr.includes(arr[i]) &&
      check(arr[i], res) !== check(arr[i], smallArr)
    ) {
      res.push(arr[i]);
      console.log(res);
      if (res.length === n) {
        break;
      }
    }
  }

  return res;
}

//bestsolution


function firstNSmallest(array, n){
 while(array.length != n) {
   array.splice(array.lastIndexOf(Math.max(...array)), 1)
   }
   return array
 }
