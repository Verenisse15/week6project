console.log('WAR CARD GAME')

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}
// creating players name
let player1 = new Player('Andy');
let player2 = new Player('Lina');
console.log(player1);
console.log(player2);

// our cards 
let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card {
    constructor(suit, rank, value) {
        this.value = value;
        this.suit = suit; 
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.card = [];
    }
    createDeck() {

        for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
            for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
                this.card.push(new Card(values[valueIndex], ranks[valueIndex], suits[suitIndex]))
            }
        }
        console.log(this.card);
    }
    shuffleDeck() {

        for(let i = this.card.length - 1; i > 0; i--){
            let shuffle = Math.floor(Math.random() *(i + 1));
            [this.card[i], this.card[shuffle]] =[this.card[shuffle], this.card[i]];
        }
        console.log(this.card);
      }
    
    dealDeck() {
        // for (let i =0; i < 52; i +=2 ) { 
        player1.hand = this.card.slice(0,26);
        player2.hand = this.card.slice(26,52);
        console.log(player1.hand)
        console.log(player2.hand)
      }
}
    let freshDeck = new Deck()
    freshDeck.createDeck();
    freshDeck.shuffleDeck();
    freshDeck.dealDeck();


class Game {
    constructor () {
        this.cardPlayers = [];
    }
    startGame (){ //calculating scores in each round.
        for (let round = 0; round < 26; round++){
            if(player1.hand[round].value > player2.hand[round].value) {
                player1.score = player1.score + 1;

                console.log(`round ${round}
                ${player1.name}
                ${player1.hand[round].value} of ${player1.hand[round].suit}
                ${player2.name}
                ${player2.hand[round].value} of ${player2.hand[round].suit}

                ${player1.name} is the winner!!

                player1 score: ${player1.score}
                player2 score: ${player2.score} `)



            } else if( player2.hand[round].value > player1.hand[round].value ) {
                player2.score = player2.score + 1 ; 

                console.log (` round ${round}
                ${player1.name}
                ${player1.hand[round].value} of ${player1.hand[round].suit}
                ${player2.name}
                ${player2.hand[round].value} of ${player2.hand[round].suit} 
                
                ${player2.name} is the winner!! 
                
                player1 score: ${player1.score}
                player2 score: ${player2.score} `)

            } else {
                console.log (` 
                round ${round}
                ${player1.name}
                ${player1.hand[round].value} of ${player1.hand[round].suit}
                ${player2.name}
                ${player2.hand[round].value} of ${player2.hand[round].suit}
                 
                ${player1.name}, ${player2.name} tied round!
                
                player1.score: ${player1.score}
                player2.score: ${player2.score} `)

            
            }

    


            }
        }
    }


let newGame = new Game;
newGame.startGame(); //gather scores and annouce winner.

console.log("Player1 final score:", player1.score);
console.log("Player2 final score:", player2.score);

    if (player1.score > player2.score){
        console.log( "Andy is the WINNER!");
    }else if (player1.score < player2.score){
        console.log("Lina is the WINNER!");
    }else {
        console.log("The game is tied.");
    }

