function isIsogram(str){
  var low=str.toLowerCase();
  var flag=true;
   for(var i=0;i<str.length;i++){
     for(var j=str.length;j>i;j--){
       if (low[i]==low[j]){
        flag  = false;
       }
     }
   }
  
return flag;
}
