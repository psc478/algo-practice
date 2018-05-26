let dictionary = ["GEEKS", "ZEQ", "GO", "QUIZ", "FOR", "GZQK", "SEIE"];

let boggle_board = [['G','I','Z'],
                    ['U','E','K'],
                    ['Q','S','E']];

function findInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;
        }
    }
    return false;
}

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

function isWord(diction,board){
  let good_words = [];

  for (i=0;i<diction.length;i++){
    let str = diction[i];
    let used_letters = [];
    console.log("***WORD:",str);

    for(j=0;j<str.length;j++){
      console.log("!!!!!!!LETTER:",str.charAt(j));

        coordinates:
        for(k=0;k<board.length;k++){
          console.log("ROW(0-2):",k);

          for(m=0;m<board[k].length;m++){
            console.log("COLUMN:",m);

            if(
              (str.charAt(j)===board[k][m])&&(findInArray(used_letters,[k,m])==false)&&
              ((adjacent(k,m,used_letters[used_letters.length - 1]))||(used_letters.length==0))   //still inside if statement, working on adjacent logic
          ) {
              let used_coor = [k,m];
              used_letters.push(used_coor);
              console.log("FOUND A GOOD LETTER, KEEP GOING");
              if((j==str.length-1)&&(used_letters.length==str.length)){
                good_words.push(str);
              }
              break coordinates;
          }
        }
      }
    }
  }
  return good_words;
}

let output = isWord(dictionary,boggle_board);
console.log(output);
