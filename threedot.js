const ages = [20, 25, 30, 40, 50];
const ages2 = [15, 24, 45, 35];
const ages3 = [11, 24, 85, 52];
// const result = ages.concat(ages2).concat(200).concat(ages3);
//ES6
const result = [...ages, ...ages2, 6, ...ages3]
console.log(result);

//max
const takaPoisa = [25, 30, 15, 85];
const maximum = Math.max(...takaPoisa);
console.log(maximum);

