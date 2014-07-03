var makeCard = (function() {

  function Card() {

    this.cardFactory = function (idNum) {
      var newCard = { };
      if(!inRange(idNum, 0, 51)) { return false; }
      newCard.idNum = idNum;
      newCard.rank = rank;
      newCard.suit = suit;
      newCard.color = color;
      newCard.cardID = cardID;
      newCard.cardName = cardName;
      newCard.precedes = precedes;
      newCard.sameColor = sameColor;
      newCard.nextInSuit = nextInSuit;
      newCard.prevInSuit = prevInSuit;
      newCard.inRange = inRange;
      return newCard;
    }

    this.inRange = function (number, min, max) {
      if (typeof (number) !== "number") {
        console.error('validation error! "' + number + '" is not a number');
        return NaN;
      } else if ((number <= max) && (number >= min)) {
        return true;
      } else {
        console.error('validation error! "' + number + '" is outside the given range');
        return undefined;
      }
    }


    rank = function() { // --> 1..13
      return (Math.floor(this.idNum/4) + 1);
    }
    suit = function(card) { // --> 1..4
      return ((this.idNum) % 4) + 1;
    }
    cardID = function() { // --> 0..51
      return this.idNum;
    }
    color = function(card) { // -->"red","black"
      if (this.suit() < 3) {
        return "red";
      } else {
        return "black";
      }
    }
    cardName = function() { // --> string
      var nameString = "";
      switch (this.rank()) {
        case 1:
          nameString = nameString.concat("Ace");
          break;
        case 2:
          nameString = nameString.concat("Two");
          break;
        case 3:
          nameString = nameString.concat("Three");
          break;
        case 4:
          nameString = nameString.concat("Four");
          break;
        case 5:
          nameString = nameString.concat("Five");
          break;
        case 6:
          nameString = nameString.concat("Six");
          break;
        case 7:
          nameString = nameString.concat("Seven");
          break;
        case 8:
          nameString = nameString.concat("Eight");
          break;
        case 9:
          nameString = nameString.concat("Nine");
          break;
        case 10:
          nameString = nameString.concat("Ten");
          break;
        case 11:
          nameString = nameString.concat("Jack");
          break;
        case 12:
          nameString = nameString.concat("Queen");
          break;
        case 13:
          nameString = nameString.concat("King");
          break;
      }
      nameString = nameString.concat(" of ");
      switch (this.suit()) {
        case 1:
          nameString = nameString.concat("Hearts");
          break;
        case 2:
          nameString = nameString.concat("Diamonds");
          break;
        case 3:
          nameString = nameString.concat("Spades");
          break;
        case 4:
          nameString = nameString.concat("Clubs");
          break;
      }
      return nameString;
    }
    precedes = function(cardB) { //-->false,true
      if (this.inRange(cardB.cardID(), 0, 51)) {
        if (cardB.rank() - this.rank() === 1) {
          return true;
        } else if ((cardB.rank() == 1) && (this.rank() == 13)) {
          return true;
        } else {
          return false;
        }
      } else {
        return;
      }
    }
    sameColor = function(cardB) { //-->false,true
      if (this.inRange(cardB.cardID(), 0, 51)) {
        if (cardB.color() === this.color()) {
          return true;
        } else {
          return false;
        }
      } else {
        return;
      }
    }
    nextInSuit = function() {//--> 0..51
      if (this.idNum< 48) {
        return (this.idNum + 4);
      } else {
        return (this.idNum + 4 - 52);
      }
    }
    prevInSuit = function() {//--> 0..51
      if (this.number > 3) {
        return (this.idNum - 4);
      } else {
        return (this.idNum - 4 + 52);
      }
    }

    return cardFactory;

  }
  return Card();
})()



var card = new makeCard(4);
console.log(card);
console.log(card.constructor));

/*3) Cards Schmards

(Note: If you're fed up with the cards, you don't have to write all the methods. Just do a few to make sure you understand how to attach and call them in the constructor pattern.)

a) [Easy] Change your makeCard factory into a constructor named Card. If you've finished a version from Homework #4 which lives inside a module (IIFE), leave it as a module which returns constructor Card.

b) [Easy] The majority of the methods you've written for the cards (e.g. rank, suit, name, color...) are instance methods, called through each individual card instance. Implement each of those instance methods using Card's prototype, instead of linking them to each card. Make sure each method uses 'this' to refer to the card instance.

c) [Moderate] Include four class methods:

    cardID(rankNum,suitNum)
    cardRank(cardID)
    cardSuit(cardID)
    cardName(cardID)

These class methods should be attached to the constructor Card, which represents the whole 'class'. Notice that these class methods:

    can be called without having any card instances;
    need arguments, unlike the corresponding instance method.

The corresponding class and instance methods will have very similar code; try to share as much code between them as possible. If you're using an IIFE module, it can contain private helper functions useable by both Card and Card.prototype, or the prototype methods can make use of the class methods.*/
