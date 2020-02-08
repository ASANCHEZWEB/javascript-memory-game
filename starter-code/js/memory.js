class MemoryGame {
  constructor(cards) {
    //aqui guardamos las cartas que vienen del new de "main.js linea 28"
    this.cards = cards;
    //aqui guardamos las dos cartas clickeadas
    this.pickedCards = [];
    //aqui guardamos cuantas cartas hemos clickeado
    this.pairsClicked = 0;
    //aqui guardamos  los pares adivinados
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    //creo una variable con el array cartas del class
    let newArray = [...this.cards];
    //ahora recorro todas las cartas y de manera aleatoria genero un nuevo array
    for (let i = newArray.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      let temporalElement = newArray[i];
      newArray[i] = newArray[randomIndex];
      newArray[randomIndex] = temporalElement;
    }
    //guardo el array en las propiedades del constructor
    this.cards = newArray;
  }
  // si le sumo uno a pairsClicked , compruebo si son iguales , y si lo son , le sumo uno a pairsGuessed
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  // si los pares adivinados es igual a la mitad del numero total de cartas , significa que no hay mas cartas posibles para voltear (juego terminado)
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}
