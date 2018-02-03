// Greeting Card Maker
// The existing CardMaker object below contains a single method that returns a greeting. Your job is to add one or more methods to it, then use it as a prototype for at least three other objects using Object.create()

// Minimum requirement
// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

// Challenges
// Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.
// Output the HTML strings with classes to the DOM that you can style with CSS.
// Refactor "makeFrontMessage" to return something more elaborate.

//====== Let see it in the DOM ======//
var domText = document.getElementById("greeting-card");

//====== constructor for CardMaker Object ======//
const CardMaker = {
    frontMessage: function(string) {
      return `<h1>${frontMessage}</h1>` 
      // return `<h1>${this.frontMessage}</h1>` 
      // console.log(this.FrontMessage)
    },

    insideMessage: function(string) {
      return `<h3>${insideMessage}</h3>`
      // return `<h3>${this.insideMessage}</h3>`
        // console.log(this.BackMessage)
      }
  }
//Testing the object functions
  // console.log(CardMaker);
  // console.log(CardMaker.frontMessage());
  // console.log(CardMaker.insideMessage());

// CardMaker.prototype.Greeting = function(){
//   return this.frontMessage + '<div>' + this.insideMessage + '</div>';
//}

// ===== Birthday Card ======== //

const Birthday = Object.create(CardMaker);

Birthday.frontMessage = "Happy Birthday!";
Birthday.insideMessage = "Eat, drink and drink some more.....BUT please stop drinking when you think walking around in your birthday suit in public would be good idea to celebrate the day of your birth.";
Birthday.style = document.getElementById("greeting-card").style.color = "red";
//console.log(Birthday.frontMessage, Birthday.insideMessage);
domText.innerHTML += Birthday.frontMessage + "<div>" + Birthday.insideMessage + "</div><br>";


// ===== Anniversary Card ======== //

const Anniversary = Object.create(CardMaker);

Anniversary.frontMessage = "I remembered this year...";
Anniversary.insideMessage = "Happy Anniversary baby! Thank you for not leaving me when I forgot last year.";
//console.log(Anniversary.frontMessage, Anniversary.insideMessage);
domText.innerHTML += Anniversary.frontMessage + "<div>" + Anniversary.insideMessage + "</div><br>";


// ===== Valentine Card ======== //

const Valentine = Object.create(CardMaker);

Valentine.frontMessage = "Be mine Valentine";
Valentine.insideMessage = "Life is sweeter having you in my life. Happy Valentine's Day my Love.";
//console.log(Valentine.frontMessage, Valentine.insideMessage);
domText.innerHTML += Valentine.frontMessage + "<div>" + Valentine.insideMessage + "</div><br>";



// ==== Refactor this to link this object to cardMaker =====
// const BirthdayCard = Object.create(CardMaker);

// BirthdayCard.makeFrontMessage()
// BirthdayCard.makeBackMessage()


// .document.getElementById("birthday-front").innerHTML









