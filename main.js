// Greeting Card Maker
// The existing CardMaker object below contains a single method that returns a greeting. Your job is to add one or more methods to it, then use it as a prototype for at least three other objects using Object.create()

// Minimum requirement
// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

// Challenges
// Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.
// Output the HTML strings with classes to the DOM that you can style with CSS.
// Refactor "makeFrontMessage" to return something more elaborate.

//====== Let's see it in the DOM ======//
const cardSection = document.getElementsByTagName("SECTION");
// var addClass = cardSection.className += "bday-card";
// cardSection.style.backgroundColor = "lightgray";
// var paragraph = document.createAttribute("");
// cardSection.className = "colorBox";
// var div = document.getElementsByTagName("DIV")[0].className;

//====== constructor for CardMaker Object ======//
//Refactor "makeFrontMessage" to return something more elaborate.
const CardMaker = {
    frontMessage: function(string) {
      return `<h2>${this.frontMessage}</h2>`  
      // console.log(this.FrontMessage)
    },
    insideMessage: function(string) {
      return `<p>${this.insideMessage}</p>`
      // console.log(this.BackMessage)
      }
  }
//Testing the object functions
  // console.log(CardMaker);
  // console.log(CardMaker.frontMessage());
  // console.log(CardMaker.insideMessage());

// ===== Birthday Card ======== //

const Birthday = Object.create(CardMaker);
Birthday.frontMessage = "Happy Birthday!";
Birthday.insideMessage = "Eat, drink and drink some more.....BUT please stop drinking when you think walking around in your birthday suit in public would be good idea to celebrate the day of your birth.";

//mvp Output two messages, one from the front and one from the inside of the card, to the console.
console.log(Birthday.frontMessage, Birthday.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardSection.innerHTML += "<div><h2>" + Birthday.frontMessage  + "</h2>" + "<p>" + Birthday.insideMessage + "</p></div>";
// cardDiv.style.backgroundColor = "lightgray"; 

//============ child birthday card ==============//
//Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.
const childBirthday = Object.create(Birthday);
childBirthday.frontMessage = "Happy Birthday my young Padawan!";
childBirthday.insideMessage = "May the fork be with you as you eat your cake.";
//mvp Output two messages, one from the front and one from the inside of the card, to the console.
console.log(childBirthday.frontMessage, childBirthday.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardSection.innerHTML += "<div><h2>" + childBirthday.frontMessage  + "</h2>" + "<p>" + childBirthday.insideMessage + "</p></div>";

//============ adult birthday card ==============//
const adultBirthday = Object.create(Birthday);
adultBirthday.frontMessage = "Happy Birthday my young Padawan!";
adultBirthday.insideMessage = "May the fork be with you as you eat your cake.";
//mvp Output two messages, one from the front and one from the inside of the card, to the console.
console.log(adultBirthday.frontMessage, adultBirthday.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardSection.innerHTML += "<div><h2>" + adultBirthday.frontMessage  + "</h2>" + "<p>" + adultBirthday.insideMessage + "</p></div>";
 



// ===== Anniversary Card ======== //

const Anniversary = Object.create(CardMaker);
Anniversary.frontMessage = "I remembered this year...";
Anniversary.insideMessage = "Happy Anniversary baby! Thank you for not leaving me when I forgot last year.";

//mvp Output two messages, one from the front and one from the inside of the card, to the console.
console.log(Anniversary.frontMessage, Anniversary.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardSection.innerHTML += "<div><h2>"+ Anniversary.frontMessage + "</h2>" + "<p>" + Anniversary.insideMessage + "</p></div>";


// ===== Valentine Card ======== //

const Valentine = Object.create(CardMaker);
Valentine.frontMessage = "Be mine Valentine";
Valentine.insideMessage = "Life is sweeter having you in my life. Happy Valentine's Day my Love.";

//mvp Output two messages, one from the front and one from the inside of the card, to the console.
console.log(Valentine.frontMessage, Valentine.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardSection.innerHTML += "<div><h2>" + Valentine.frontMessage + "</h2>" + "<p>" + Valentine.insideMessage + "</p></div>";



// ==== Refactor this to link this object to cardMaker =====
// const BirthdayCard = Object.create(CardMaker);

// BirthdayCard.makeFrontMessage()
// BirthdayCard.makeBackMessage()


// .document.getElementById("birthday-front").innerHTML









