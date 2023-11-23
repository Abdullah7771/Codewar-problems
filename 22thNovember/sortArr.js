function sortArr(arr){

return arr.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()))
}

sortArr(["Hello","there","I'm","fine"]);
