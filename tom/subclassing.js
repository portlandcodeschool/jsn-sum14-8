function Animal() {
  this.move = function() {
    return 'walk';
  }
}

function Bird() {
  this.move = function() {
    return 'fly';
  }
  this.hasWings = true;
}
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;


function Fish() {
  this.move = function() {
    return 'swim';
  }
}
Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;

function Penguin() {
  this.move = function() {
    return 'swim';
  }
}
Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;

/*4) Simple Subclassing

(OPTIONAL: If you didn't understand the brief explanation of inheritance in class, don't worry about this one. If you think you get it and want some practice, give it a try!)

[Easyish] Implement a simple taxonomy of four related classes, using a constructor for each:

    Animal: every instance of an Animal should inherit a method called move(). For basic animals, this just returns the string "walk".
    Bird: A subclass of Animal. Every Bird instance should return "fly" instead of "walk" when asked to move(). All Birds also have a property hasWings which is true.
    Fish: Another subclass of Animal. A Fish instance will "swim" instead of "walk".
    Penguin: A subclass of Bird. Penguins cannot fly, so they should return "swim" when moving.

You should see these behaviors:*/

new Animal().move();// 'walk'
new Fish().move();// 'swim'
new Bird().move();// 'fly'
var pengo = new Penguin();
pengo.move();  //'swim'
pengo.hasWings; //true;
pengo instanceof Bird; //true
pengo instanceof Animal; //true

/*Bonus: see if you can make Penguins move() by sharing code with Fish, even though Penguins are Birds.*/
