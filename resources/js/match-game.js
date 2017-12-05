var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  numcards = 16;
  randomCardArr = [];
  //generate card number array
  for(var i=0;i<(numcards/2);i++){
    randomCardArr.push(i + 1);
    randomCardArr.push(i + 1);
  }
  //shuffle with Fisher-Yates
  return shuffle(randomCardArr);
};

function shuffle(array){
  var m = array.length, t, i;
  //while there remain elements to shuffle..
  while(m){
    //pick a remaining element
    i = Math.floor(Math.random() * m--);
    //swap with current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.empty(); // empties the game object
  for (var i = 0; i < cardValues.length; i++) {
    cardValues[i]
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
