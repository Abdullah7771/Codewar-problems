function alphabetPosition(text) {
    var arr=[]
    var low=text.toLowerCase();

    for (let index = 0; index <low.length; index++) {
        // arr.push(text.charCodeAt(i)-96)
        // if( text[index].match("/^[a-zA-Z()]+$/"))
        var code=low.charCodeAt(index)-96;
        if(code > 0 && code < 27)
       arr.push(code)
        
    }
     return arr.join(' ');
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))