window.onload = function(){
  
  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');
  
  var timer = 0;
  var turn = "";
  
  var add_mark = function(){
    if(timer % 2 == 0){
      var turn = "X";
      this.innerHTML = turn;      
      timer++;
    }else if(timer % 2 == 1){
      var turn = "O";
      this.innerHTML = turn;
      timer++;
    }
  }
  
 function win() {
    if(
      squares[0] == "X" && squares[1] ==  "X" && squares[2] == "X" ||
      squares[3]  == "X" && squares[4]  == "X" && squares[5] == "X" ||
      squares[6]  == "X" && squares[7]  == "X" && squares[8] == "X" ||
      squares[0]  == "X" && squares[3]  == "X" && squares[6] == "X" ||
      squares[1]  == "X" && squares[4]  == "X" && squares[7] == "X" ||
      squares[2]  == "X" && squares[5]  == "X" && squares[8] == "X" ||
      squares[0]  == "X" && squares[4]  == "X" && squares[8] == "X" ||
      squares[2]  == "X" && squares[4]  == "X" && squares[6] == "X") {
      console.log("We have a winner!");
      i = 10;
    } else if(
      squares[0] == "O" && squares[1] ==  "O" && squares[2] == "O" ||
      squares[3]  == "O" && squares[4]  == "O" && squares[5] == "O" ||
      squares[6]  == "O" && squares[7]  == "O" && squares[8] == "O" ||
      squares[0]  == "O" && squares[3]  == "O" && squares[6] == "O" ||
      squares[1]  == "O" && squares[4]  == "O" && squares[7] == "O" ||
      squares[2]  == "O" && squares[5]  == "O" && squares[8] == "O" ||
      squares[0]  == "O" && squares[4]  == "O" && squares[8] == "O" ||
      squares[2]  == "O" && squares[4]  == "O" && squares[6] == "O") {
      console.log("We have a winner!");
      i = 10
    } else {
      console.log("Cats Game");
    }
  }
  
  for(var i = 0; i < squares.length; i++) {
    // When you click a square, runs the `add_mark` method.
    squares[i].addEventListener("click", add_mark);
    win();
  }

}