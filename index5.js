// Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.

//a
const getGreeting = function(name) {
return 'Hello ' + name + '!';
}

console.log(getGreeting('Christina'));

//b

const getotherGreeting = (name) =>  {
    return 'Hello ' + name + '!';
}

console.log(getotherGreeting('Christina'));