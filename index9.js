// Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports.push('football')
teamSports.unshift('soccer') // part a: a new variable that adds to the teamSports array using the push method and unshift method
console.log(teamSports); //part d: the push and shift method adds on 2 addional sports 

let dog1 = 'Bingo';
let dog2 = dog1
 dog1 = 'Dingo'//part b: created a second variable and equated it to dog1 which allowed us to give dog1 a new variable
console.log(dog1);//part d: Bc we changed Bingo to Dingo by creating a reference to the old name

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = {...cat1};// part c: created a shallow clone of cat 1 and then changed the name property for cat1
cat1.name = 'Floffy';
console.log(cat1); // part d: After creating a shallow clone, we wre able to change the name property
