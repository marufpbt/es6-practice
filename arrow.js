// //general way to declare funtion
// function doubleIt(num){
// 	return num * 2;
// }
// const doubleIt = function(num){
// 	return num * 2;
// }
//ES6 -arrow function
const doubleIt = num => num * 2;
const add = (num1, num2) => num1 + num2;
const emptyParameter = () => 5;
const doMath = (x, y) => {
	const sum = x + y;
	const diff = x - y;
	return sum * diff;
}
const result = doubleIt(20);
console.log(result);
const result2 = add(20, 25);
console.log(result2);
const result3 = emptyParameter();
console.log(result3);
const result4 = doMath(10, 5);
console.log(result4);

