document.addEventListener("DOMContentLoaded", function(event){
let player1Name = "";
let player2Name = "";

// object black that contains its value 'x' and image
let black = {
   value: 'X',
   image: "images/blackStone.png",
};
// object white that contains its value 'O' and image
let white = {
   value:'O',
   image: "images/whiteStone.jpg",
};

// declare and initialize input 1 and input2 from landing page form
let input1 = $('#play1');
let input2 = $('#play2');
// on click of submit, player1 and 2s names are initialized and hide page1
// by setting display:none and shows page2 by setting displace to block
$('#submit').click(function(){
  player1Name = input1.val();
  player2Name = input2.val();
  $('#page1').css('display','none');
  $('#page2').css('display','block');
})

// two const variables that are used to check if users' inputs meet
// winning condition, which is to connect four stones.
const charToCheck = "OOOO";
const charToCheck2 = "XXXX";
// cell is created to put stone image element and addEventListener
let cell = $('.row .cell');
let turn = 1;     // when turn is an odd number, black stone plays,
                  // when turn is an even number, white stone plays.
let keepPlaying = true;
// initialized empty board with 2-dimensional array.
let boardArr = [ ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-'],
                 ['-','-','-','-','-','-','-','-']];
// below arrays are used to hold X and O string values that will be
// compared to above characters to check variables.
let horizonRows =  ["","","","","","","",""];
let verticalRows = ["","","","","","","",""];
let diagonalRows = ["","","","","","","","",""];
let diagonalRows2 = ["","","","","","","","",""];

// function inputValue takes index number of cells and value from user
// then, assigns the value into 2-dimensional array
function inputValue(index, playerVal){
   // horizontal index number: index/8
   var horiIndex = Math.floor(index/boardArr.length);
   // vertical index number: index % 8
   var vertIndex = index % boardArr.length;
   boardArr[horiIndex][vertIndex] = playerVal;
}

// function whoWin conducts horizontal check, vertical check, and
// two diagonal checks, from right to left and from left to right for
// winning condition
function whoWin(){

   horizonCheck();
   verticalCheck();
   diagonalCheck1();
   diagonalCheck2();
}

// horizontal check function puts each horizontal boardArr value
// into temporarly array and converts it to string value and input them to
// horizontal row array and check if the values meet winning condition
// by helper function checkForWin.
function horizonCheck(){
    for(let j = 0; j < boardArr.length;j++)
    {
         var temArr = [];

         for(let k =0; k <boardArr.length;k++)
         {
           temArr.push(boardArr[j][k]);       // push boardArr value to temArr
           horizonRows[j] = temArr.join('');  // converts temporary array into string
         }
         checkForWin(horizonRows[j]);
    }

}

// vertical check function puts each vertical boardArr value
// into temporarly array and converts it to string value and input them to
// vertical row array and check if the values meet winning condition
// by helper function checkForWin.
function verticalCheck(){
    for(let b=0;b<boardArr.length;b++)
    {
         var temArr2 = [];
         for(let c = 0; c <boardArr.length;c++)
         {
            temArr2.push(boardArr[c][b]);        // push boardArr value to temArr2
            verticalRows[c] = temArr2.join('');  // converts temporary array into string
            checkForWin(verticalRows[c]);
         }

    }
}

// this function checks diagonal positions of boardArr and put the diagonal
// values into temArrs, converts it to string, and then put them to diagonalRows
// array. These diagonalRows are checked by checkForWin function.
function diagonalCheck1(){
   //temporary array that holds 9 diagonal lines from right to left diagonally
   var temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [];
   var temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [],temArr8 =[];
  // d is
   for(let d=0;d<boardArr.length;d++)
   {
         for(let e = 0; e < boardArr.length; e++)
         {
            // d and e are counters of for loops
            if( d + e === 3){       // at the index location where an addition of d and e is equal to 3
               temArr0.push(boardArr[d][e]);       // push boardArr value to temArr
               diagonalRows[0] = temArr0.join(''); // converts temporary array into string
            }else if(d + e === 4){  // at the index location where an addition of d and e is equal to 4
               temArr1.push(boardArr[d][e]);       // push boardArr value to temArr
               diagonalRows[1] = temArr1.join(''); // converts temporary array into string
            }else if(d + e === 5){
               temArr2.push(boardArr[d][e]);
               diagonalRows[2] = temArr2.join('');
            }else if(d + e === 6){
               temArr3.push(boardArr[d][e]);
               diagonalRows[3] = temArr3.join('');
            }else if(d + e === 7){
               temArr4.push(boardArr[d][e]);
               diagonalRows[4] = temArr4.join('');
            }else if(d + e === 8){
               temArr5.push(boardArr[d][e]);
               diagonalRows[5] = temArr5.join('');
            }else if(d + e === 9){
               temArr6.push(boardArr[d][e]);
               diagonalRows[6] = temArr6.join('');
            }else if(d + e === 10){
               temArr7.push(boardArr[d][e]);
               diagonalRows[7] = temArr7.join('');
            }else if(d + e === 11){
               temArr8.push(boardArr[d][e]);
               diagonalRows[8] = temArr8.join('');
            }
         }
   }
   // checkForWin for each diagonalRows
   for(let u=0; u<diagonalRows.length;u++){
        checkForWin(diagonalRows[u]);
   }
}
// this function checks diagonal positions of boardArr and put the diagonal
// values into temArrs, converts it to string, and then put them to diagonalRows
// array. These diagonalRows are checked by checkForWin function.
function diagonalCheck2(){
   //temporary array that holds 9 diagonal lines from left to right diagonally
   var temArr0 = [],temArr1 = [],temArr2 = [],temArr3 = [];
   var temArr4 = [],temArr5 = [],temArr6 = [],temArr7 = [],temArr8 =[];

   for(let w=0;w<boardArr.length;w++)
   {

         for(let k = 0; k < boardArr.length; k++)
         {
            // w and k are counters of for loops
            if( w - k === -4){       // at the index location where subtraction of w and k is equal to -4
               temArr0.push(boardArr[w][k]);          // push boardArr value to temArr
               diagonalRows2[0] = temArr0.join('');   // converts temporary array into string
            }else if(w - k === -3){   // at the index location where subtraction of w and k is equal to -3
               temArr1.push(boardArr[w][k]);          // push boardArr value to temArr
               diagonalRows2[1] = temArr1.join('');   // converts temporary array into string
            }else if(w - k === -2){
               temArr2.push(boardArr[w][k]);
               diagonalRows2[2] = temArr2.join('');
            }else if(w - k === -1){
               temArr3.push(boardArr[w][k]);
               diagonalRows2[3] = temArr3.join('');
            }else if(w === k){
               temArr4.push(boardArr[w][k]);
               diagonalRows2[4] = temArr4.join('');
            }else if(w - k === 1){    //iterating more than existing
               temArr5.push(boardArr[w][k]);
               diagonalRows2[5] = temArr5.join('');
            }else if(w - k === 2){
               temArr6.push(boardArr[w][k]);
               diagonalRows2[6] = temArr6.join('');
            }else if(w - k === 3){
               temArr7.push(boardArr[w][k]);
               diagonalRows2[7] = temArr7.join('');
            }else if(w - k === 4){
               temArr8.push(boardArr[w][k]);
               diagonalRows2[8] = temArr8.join('');
            }
         }

   }
   // checkForWin for each diagonalRows2
   for(let v=0; v<diagonalRows.length;v++){
         checkForWin(diagonalRows2[v]);
   }
}

//the function checks if string passed from a check function meets
// winning condition
function checkForWin(str){
       // this for loop iterate through each string's position from 0 to the end
       for(let a =0; a<str.length;a++)
       {
           // substring method takes 4 string values and compare it to
           // variables charTochecks. Once str matches charTocheck,
           // it meets winning condition and stop the game by setting keepPlaying
           // false, and changes screen's html value to who wins the game.
           if( str.substring(a,a+4) === charToCheck){
           //    alert("White stones win!");
              if(player2Name.length !== 0){
                $('#screen').html(player2Name + " wins!");
                keepPlaying = false;
              }else{
                $('#screen').html("White stones win!");
                keepPlaying = false;
              }
           }else if( str.substring(a,a+4) === charToCheck2){
           //    alert("Blak stones win!");
              if(player1Name.length !== 0){
                $('#screen').html(player1Name + " wins!");
                keepPlaying = false;
              }else{
                $('#screen').html("Black stones win!");
                keepPlaying = false;
              }
           }
       }

}
// reset function reset boardArr, horizontalRows,verticalRows, diagonalRows,
// turn to 1, keepPlaying as true, and remove stone image elements from each
// cell. this function is called when re-start button is clicked.
function reset(){
    // reset the board
    for(let a =0;a < 8; a++){
       for(let b=0; b < 8; b++){
          boardArr[a][b] = '-';
       }
       horizonRows[a] = "";
       verticalRows[a] = "";
    }

    diagonalRows = ["","","","","","","","",""];
    diagonalRows2 = ["","","","","","","","",""];
    turn = 1;             // set turn to 1, so black stone can play first again.
    keepPlaying = true;   // making game playable again by setting it to true.

    // get rid of all stone image elements from cells.
    let cellEle;
    for(let z =0; z < cell.length;z++)
    {
       if(cell[z].firstElementChild) // if cell has child element, which is an image
       {
          cellEle = $(cell[z]).first();
     //   console.log('stone to be removed  ',cellEle);
          cellEle.empty();   // empty the stone image from each cell

       }

    }
    game();

}

// when reset button is clicked, it calls reset function.
$( ".reset" ).click(function() {
  alert( "Reset button clicked" );
  reset();
  $('#screen').html("Connect 4 stones!");

});

function game(){
// starting of main codes
  for(let i =0; i < cell.length; i++)
  {
    // addEventListener is added to each cell.
    $(cell[i]).on( "click", function play() {
    // the game keeps running until keepPlaying is false. when a player
    // wins a game, it will be changed to false.
      if(keepPlaying === true)
      {
      //when cell is clicked, create an img element with a class 'stone'
      if(!$(cell[i]).children().length){
        let stoneEle = $('<img>').attr('class','stone');
        if(turn % 2 === 0)
        {
         // if turn is even, it is white stone's turn, it adds white stone image
         // to the img element.
          stoneEle.attr('src',white.image);
         // cell's index number, white stone player's value to inputVal function
          inputValue(i,white.value);
          turn++;    // turn increments
        }else{
         // if turn is odd, it is black stone's turn, it adds black stone image
         // to the img element.
          stoneEle.attr('src',black.image);
         // cell's index number, black stone player's value to inputVal function
          inputValue(i,black.value);
          turn++;    // turn increments
        }
        // stoneElement is appended to each cell element.
        stoneEle.appendTo(cell[i]);
      }
        // once the cell is clicked, remove eventListener in that cell.
        $(cell[i]).off('click',play);
        whoWin();  // whoWin function call
      }

    });
  }

}

game();


});
