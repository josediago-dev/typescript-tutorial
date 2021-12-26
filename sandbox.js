// let pointGuard: any; // type is any
// pointGuard = 'Steph Curry'; // allowed (string)
// console.log(pointGuard);
// pointGuard = 30; // allowed (number)
// console.log(pointGuard);
// let warriors: any[] = []; // type is array of any type
// warriors.push('steph'); // allowed (string)
// warriors.push(30); // allowed (number)
// warriors.push({ active: true }); // allowed (object)
// console.log(warriors); // output: ['steph', 30, { active: true }]
var pointGuard;
pointGuard = { name: 30, number: 'steph', active: { isActive: true } };
console.log(pointGuard);
