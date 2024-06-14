// Q . 13: Your own array: think of your favourite mode of transportation, such as a motorcycle or a car, and make a list thazt stores several examples. use your list to print a series of statement about these items, such as "I would like to own a Honda motorcycle".
let vehicles: string[] = ["Honda", "Mercedies", "Ferrari", "BMW"];

// console.log("I would like to own a" + " " + vehicles[0]);
vehicles.map((item)=> console.log(`I would like to own a ${item}`));
