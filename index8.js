// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
// b) Create a new object for a different city with different properties and call your function
// again with the new object.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const lafayette = {
  name: "Lafayette",
  originalName: "Vermilionville",
  population: 121_771,
  state: "Louisiana",
  founded: "1821 by Jean Mouton",
  timezone: "Central",
};

// for (let key in sydney) {
//     console.log( key + " = " + sydney[key]);
// }

function whatCity(city) {
  for (let key in city) {
    console.log(key + " = " + city[key]);
  }
}

whatCity(lafayette);
whatCity(sydney);

// const phone = {
// model: 'iPhone 11',
// color: 'black',
// storage: 64
// }
// for (let key in phone) { // iterates over each property in the phone object
// console.log('key: ' + key); // prints each object property name (key) in turn
// console.log('value: ' + phone[key]); // prints each object value in turn
// }
