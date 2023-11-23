function stringTransformer(str) {
    var rev=str.split(" ").reverse().join(" ");
    var arr=[]
    for (let i = 0; i < rev.length; i++) {
        if(rev[i]==rev[i].toLowerCase()){
        arr.push(rev[i].toUpperCase())
        }
        else{
            arr.push(rev[i].toLowerCase())

        }
        
    }
    return arr.join('')
    


  }

  stringTransformer("Example Input")