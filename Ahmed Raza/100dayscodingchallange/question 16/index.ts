// // Q . 16: More Guest:You just found a bigger dinner table, so now more space available. Think of three more guests to invite to dinner.
// => Start with your program from Ex# 15. Add a print statement at the end of your program informing people that you found a bigger dinner table.
// => Add one new guest to the beginning of your array.
// => Add one new guest to the middle of your array. Use append () to add one new guest to the end of your list. Print a new set of invitation messages, one of each person in your list. 

let guestArr: string[] = ["Ahmed Raza", "Farrukh", "Fahad"];
let cannotAttend: string = "Fahad";
let newGuest: string = "salman";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
console.log(guestArr);
let GuestBegin:string = "Ahsan"
guestArr.unshift("Ahsan");
console.log(guestArr);

let Middleguest:string = "Hassam";
let Middleindex = guestArr.length / 2;

guestArr.splice(2, 0, "Hassam")
console.log(guestArr);

let LastGuest:string = "sohail"

guestArr.push("sohail")
console.log(guestArr);

guestArr.map((item) =>
    console.log(`Dear ${item}, we found a bigger dinner table, you are invited to a dinner`)
);
