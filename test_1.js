// first test
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

// second test 
shuffleDeck() {

    for(let i = this.card.length - 1; i > 0; i--){
        let shuffle = Math.floor(Math.random() *(i + 1));
        [this.card[i], this.card[shuffle]] =[this.card[shuffle], this.card[i]];
    }
    console.log(this.card);
  }

// third test
let player1 = new Player('Andy');
let player2 = new Player('Lina');
console.log(player1);
console.log(player2);