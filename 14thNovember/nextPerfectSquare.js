function findNextSquare(number) {
  function findNextSquare(number) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const sq=Math.sqrt(number);
  return sq===Math.floor(sq)

}
  
      if(findNextSquare(number)){
        const sq=Math.sqrt(number);
        const  s=Math.floor(sq) +1;
        return s*s
    }
    else{
        return -1
    }


}
