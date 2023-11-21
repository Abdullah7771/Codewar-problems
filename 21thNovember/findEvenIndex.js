function findEvenIndex(array)
{
 for (let i = 0; i < array.length; i++) {
    var rightSum=0;
    var leftSum=0;

    for (let j = 0; j < i; j++) {
       leftSum+=array[j]
        
    }

    for (let k = i+1; k < array.length; k++) {
        rightSum+=array[k]
        
    }

    if(leftSum==rightSum){
        return i;
}

    
 }
 return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))