const firstName = "Maruf";
const lastName = "Billah";
const fullName = firstName + " " + lastName + " is a good boy"; //obsolete way
const fullName2 = `${firstName} ${lastName} is a good boy.`; //ES6
const fullName3 = `${firstName} ${400+20} is a good boy.`; //ES6
console.log(fullName);
console.log(fullName2);
console.log(fullName3);

const multiline = "I love you"
+ "I miss you"
+ "I dont like you"
+ "You are a lier";
console.log(multiline);

const multiline2 = `I love you
I miss you
I dont like you
You are a lier`
console.log(multiline2);
