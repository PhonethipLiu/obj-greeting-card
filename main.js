// Greeting Card Maker
// The existing CardMaker object below contains a single method that returns a greeting. Your job is to add one or more methods to it, then use it as a prototype for at least three other objects using Object.create()

// Minimum requirement
// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

// Challenges
// Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.
// Output the HTML strings with classes to the DOM that you can style with CSS.
// Refactor "makeFrontMessage" to return something more elaborate.


let domText = document.getElementById("greeting-card");

const CardMaker = {
    frontMessage: function(string) {
      return `<h2>${this.frontMessage}</h2>` 
      // console.log(this.FrontMessage)
    },

    insideMessage: function(string) {
        return `<h2>${this.insideMessage}</h2>`
        // console.log(this.BackMessage)
      }
  };

CardMaker.prototype.greeting = function() {
    return "<div>" + this.frontMessage + this.insideMessage + "</div>"
  };

const BirthdayCard = Object.create(CardMaker);
BirthdayCard.frontMessage = "Happy Birthday!"
BirthdayCard.backMessage = "Eat, drink and drink some more.....BUT please stop drinking when you think walking around in your birthday suit in public would be good idea to celebrate the day of your birth."

domText.innerHTML = BirthdayCard.frontMessage();
domText.innerHTML= BirthdayCard.backMessage();

// ==== Refactor this to link this object to cardMaker =====
// const BirthdayCard = Object.create(CardMaker);

// BirthdayCard.makeFrontMessage()
// BirthdayCard.makeBackMessage()


// .document.getElementById("birthday-front").innerHTML









