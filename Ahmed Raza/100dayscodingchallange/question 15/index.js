// // Q . 15: Changing Guest List:You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite.
// => Start with your program from Ex# 14. Add a print statement at the end of your program stating the name of the guest who can't make it.
// => Modify your List, replacing the name of the guest who can't make it with the name of new person you are inviting.
// => Print a second set of invitation messages, one for each preson who is still in your list. 
var guestArr = ["Ahmed Raza", "Farrukh", "Fahad"];
console.log(guestArr);
var cannotAttend = "Fahad";
console.log(cannotAttend + " " + "can not make it, for dinner");
var newGuest = "salman";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", you are cordially invited to dinner"));
});
