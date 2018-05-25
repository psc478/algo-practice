let array = [1,0,2,3,4,5,6,7,8,9];


function bubblesort(arr){
  let sort = arr.length-1;
  while(sort>0){
    for (i=0; i<arr.length-1; i++){
      console.log(arr[i+1]);
      if(arr[i]>arr[i+1]){
        let less = arr[i+1];
        let more = arr[i];
        arr[i+1] = more;
        arr[i] = less;
      }else{
        sort=sort-1;
      }
      console.log(arr);
    }
  }
}

bubblesort(array);
