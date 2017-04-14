console.log("Hello Cohort 19");

var greeting = "You look terrific today!"

console.log(greeting);
var hoursInYear = 24 * 365;

console.log("hoursInYear", hoursInYear);

var minutesInDecade = (hoursInYear * 60) * 10;
console.log("minutesInDecade", minutesInDecade)

var age = 16;
var secInYear = hoursInYear * 60 * 60;
var ageInSec = secInYear * age;
console.log("ageInSec", ageInSec);

var veryWiseAge = 35;
if (age >= veryWiseAge) {
	console.log("You are verrrrrry wise");
} else if (age === 8) {
	console.log("You are at a magical age");
} else if (age < veryWiseAge) {
	console.log("You are young my pretty");
}

var myNumber = 1;
var myOtherNumber = "2";

console.log(myNumber * myOtherNumber);
console.log("The day is " + "wet");

var myJunkDrawer = [3, "dime", "sock", true, null, "28", "box of toothpicks"];
console.log("myJunkDrawer", myJunkDrawer);

console.log("howmany", myJunkDrawer.length);
console.log("first item", myJunkDrawer[0]);

var mySong = {};
mySong.title = "Welcome To the Jungle";
mySong.artist = "Guns and Roses";
mySong.awards = ["first award", "another award", "the zenith award"]

console.log("mySong", mySong);