let array = [[3,2,6],
             [9,8,1],
             [4,5,7]];

/*function search(arr){

  for(k=0;k<arr.length;k++){
    console.log("ROW(0-2):",k);

    for(m=0;m<arr[k].length;m++){
      console.log("COLUMN:",m);
      if(arr[k][m]==9){
        console.log("FOUND THE 9!");
      }
    }
  }
}

search(array);*/

function adjacent(kk,mm,prev){
  if(prev==undefined){
    return false;
  }else if(
  ((kk==prev[0])&&(Math.abs(mm-prev[1])==1)) ||//above or below
  ((mm==prev[1])&&(Math.abs(kk-prev[0])==1)) ||//left or right
  ((Math.abs(kk-prev[0])==1)&&(Math.abs(mm-prev[1])==1)) //diagonal
  ){
    return true;
  }else{
    return false;
  }
}
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
used_letters=[];
//Adjacent to 7?
let three = adjacent(0,0,used_letters[used_letters.length - 1]);
