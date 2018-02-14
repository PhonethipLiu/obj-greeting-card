// Greeting Card Maker
// The existing CardMaker object below contains a single method that returns a greeting. Your job is to add one or more methods to it, then use it as a prototype for at least three other objects using Object.create()

// Minimum requirement
// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. Output two messages, one from the front and one from the inside of the card, to the console.

// Challenges
// Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object. Output the HTML strings with classes to the DOM that you can style with CSS. Refactor "makeFrontMessage" to return something more elaborate.

//====== Let's see it in the DOM ======//
let cardDiv = document.getElementById('card');

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
cardDiv.innerHTML += "<div id='birthday'><h2>" + Birthday.frontMessage  + "</h2>" + "<p>" + Birthday.insideMessage + "</p><hr></div>";
var bDay = document.getElementById('birthday').childNodes;
bDay[0].style.color = "blue";
bDay[1].style.color = "gray";


//============ child birthday card ==============//
//Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.
const childBirthday = Object.create(Birthday);
childBirthday.frontMessage = "Happy Birthday my young Padawan!";
childBirthday.insideMessage = "May the fork be with you as you eat your cake.";
console.log(childBirthday.frontMessage, childBirthday.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardDiv.innerHTML += "<div id='child_birthday'><h2>" + childBirthday.frontMessage  + "</h2>" + "<p>" + childBirthday.insideMessage + "</p></div>";
//this is not working
// var birthdayDiv = document.getElementsByClassName('card').childNodes;
// birthdayDiv[1].style.backgroundColor = "orange";
//var childBday = document.getElementById('child_birthday').childNodes;
var childBday = document.getElementById('child_birthday').childNodes;
childBday[0].style.color = "White";
childBday[0].style.backgroundColor = "orange";
childBday[1].style.color = "orange";


//============ adult birthday card ==============//
const adultBirthday = Object.create(Birthday);
adultBirthday.frontMessage = "LORDY! LORDY! Look who turned 40!";
adultBirthday.insideMessage = "Don't let age slow you down on your birthday. Party like a rock star; recover like a boss and take the next day off.";
console.log(adultBirthday.frontMessage, adultBirthday.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardDiv.innerHTML += "<div id='adult_birthday'><h2>" + adultBirthday.frontMessage  + "</h2>" + "<p>" + adultBirthday.insideMessage + "</p></div>";
//CSS styles
var adultDiv = document.getElementById('adult_birthday');
adultDiv.style.backgroundColor = "black";
adultDiv.style.paddingBottom = "1em";
adultDiv.style.margin = "2em 0";
var adultBday = document.getElementById('adult_birthday').childNodes;
adultBday[0].style.color = "White";
adultBday[1].style.color = "gray";
 

// ===== Anniversary Card ======== //

const Anniversary = Object.create(CardMaker);
Anniversary.frontMessage = "I remembered this year...";
Anniversary.insideMessage = "Happy Anniversary baby! Thank you for not leaving me when I forgot last year.";
console.log(Anniversary.frontMessage, Anniversary.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardDiv.innerHTML += "<div id='anniversary'><h2>"+ Anniversary.frontMessage + "</h2>" + "<p>" + Anniversary.insideMessage + "</p></div>";
var anniversary = document.getElementById('anniversary');
anniversary.style.border = "1px dotted";
anniversary.style.borderRadius = "100px";
anniversary.style.textAlign = "center";
anniversary.style.paddingBottom = "1em";


// ===== Valentine Card ======== //

const Valentine = Object.create(CardMaker);
Valentine.frontMessage = "Be mine Valentine";
Valentine.insideMessage = "Life is sweeter having you in my life. Happy Valentine's Day my Love.";
console.log(Valentine.frontMessage, Valentine.insideMessage);
//Output the HTML strings with classes to the DOM that you can style with CSS.
cardDiv.innerHTML += "<div id='valentine'><h2>" + Valentine.frontMessage + "</h2>" + "<p>" + Valentine.insideMessage + "</p><hr></div>";

var vday = document.getElementById('valentine').childNodes;
vday[0].style.color = "red";
vday[0].style.fontSize = "3em";










