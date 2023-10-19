// Because of implicit boolean conversion the following will return:

if ("0") console.log('#2 zero is true') // This is not an empty string so it's true
if (-1) console.log('negative is true') // the number is not 0 so it's true
if (1) console.log('positive is true') // the number is not 0 so it's true
