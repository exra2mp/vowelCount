function getCount(str) {
  const regex=/[aeiou]/gi;
  let vowCount="";
  if(str.match(regex)){
    vowCount= str.match(regex).length;
  }else{vowCount= 0}
  
  return vowCount;
}
