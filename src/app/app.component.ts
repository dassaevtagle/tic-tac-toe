import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  // Names of the players: defaults are Player 1 and Player 2
  playerOne: string;
  playerTwo: string;

  victoriesPlayerOne: number = 0;
  victoriesPlayerTwo: number = 0;

  // These store the squares each playes has clicked on
  playerOneSquares: string[] = [];
  playerTwoSquares: string[] = new Array();

  // Change the turn
  turn: boolean = true;

  //Changes the firts turn of each round
  firstTurn: boolean = true;

  // This Map will have the square values
  squaresMapping: Map<string, string> = new Map<string, string>();

  alertWhoIsFirst(): void {
    switch (this.firstTurn){
      case true: {
        alert(`${this.playerOne} starts`);
        break;
      }
      case false: {
        alert(`${this.playerTwo} starts`);
        break;
      }
    }
  }

  playerWins(playerSquares: string[]): boolean {
      
    var result : boolean;

    
    if(playerSquares.includes('b1') && playerSquares.includes('b2') && playerSquares.includes('b3')){ result = true;} //wins on a row
    else if (playerSquares.includes('b4') && playerSquares.includes('b5') && playerSquares.includes('b6')) {result = true}
    else if (playerSquares.includes('b7') && playerSquares.includes('b8') && playerSquares.includes('b9')) {result = true}
    else if (playerSquares.includes('b1') && playerSquares.includes('b4') && playerSquares.includes('b7')) {result = true} //wins on a column
    else if (playerSquares.includes('b2') && playerSquares.includes('b5') && playerSquares.includes('b8')) {result = true}
    else if (playerSquares.includes('b3') && playerSquares.includes('b6') && playerSquares.includes('b9')) {result = true}
    else if (playerSquares.includes('b1') && playerSquares.includes('b5') && playerSquares.includes('b9')) {result = true} // wins on a diagonal
    else if (playerSquares.includes('b3') && playerSquares.includes('b5') && playerSquares.includes('b7')) {result = true}

    else {result = false}
    

    return result;

  } 

  // This function is called whenever a player clicks on a button
  squareClicked(square: string): void{
    
    // if nobody has clicked the button do this
    if(this.squaresMapping.get(square) == null){
     
      switch (this.turn){
        case true: {

          this.turn = !this.turn;
          this.squaresMapping.set(square, 'X');
          this.playerOneSquares.push(square); // add to array the square clicked
          this.playerOneSquares.sort(); //sort alphabetically the array
          console.log(this.playerOneSquares);
          break;
        }

        case false: {

          this.turn = !this.turn;
          this.squaresMapping.set(square, 'O');
          this.playerTwoSquares.push(square);
          this.playerTwoSquares.sort();
          console.log(this.playerTwoSquares);
          break;
        }
      }
    }

    //alerts if somebody wins and reset the board
    if(this.playerWins(this.playerOneSquares)) {
      alert(`${this.playerOne} wins!`);
      this.squaresMapping.clear();
      this.playerOneSquares = [];
      this.playerTwoSquares = [];
      this.firstTurn = !this.firstTurn //the other player starts now
      this.turn = this.firstTurn;
      this.victoriesPlayerOne ++;
      this.alertWhoIsFirst();
      
    }

    else if(this.playerWins(this.playerTwoSquares)){
      alert(`${this.playerTwo} wins!`);
      this.squaresMapping.clear();
      this.turn = true;
      this.playerOneSquares = [];
      this.playerTwoSquares = [];
      this.firstTurn = !this.firstTurn //the other player starts now
      this.turn = this.firstTurn;
      this.victoriesPlayerTwo ++;
      this.alertWhoIsFirst();
      
    }

  }


  

  ngOnInit(): void{
    this.playerOne = 'Player One';
    this.playerTwo = 'Player Two';
    alert(`${this.playerOne} starts!`);
  }

}
