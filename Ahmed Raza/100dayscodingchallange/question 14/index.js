// Q . 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you'd like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestArr = ["Ahmed Raza", "Farrukh", "Fahad"];
// console.log("Dear" + " " + guestArr[0] + " " + ",You are cordially invited to a dinner");
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", You are cordially invited to a dinner "));
});
