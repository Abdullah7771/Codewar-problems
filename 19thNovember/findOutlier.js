function findOutlier(integers){
    // var abs=integers.map((integer) => Math.abs(integer))
    // console.log(abs)
var even=integers.filter((integer)=> Math.abs(integer) % 2==0);
console.log(even,even.length)
var odd=integers.filter((integer)=> Math.abs(integer) % 2==1);
console.log(odd,odd.length)

if(even.length>odd.length){
    return odd[0]

}
else{
    return even[0]
}

  }

  console.log(findOutlier([0,0,-3,0,0]))