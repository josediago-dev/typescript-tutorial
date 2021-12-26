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

// let pointGuard: { name: any, jerseyNumber: any, active: any }; // object properties are of any type
// pointGuard = { name: 30, jerseyNumber: 'steph', active: { isActive: true } }; // allowed (name is a number, jerseyNumber is a string)
// console.log(pointGuard); // output: { name: 30, jerseyNumber: 'steph', active: { isActive: true } }
// pointGuard = { name: 'steph', jerseyNumber: 30, active: true, injured: false }; // error: injured is not a property when pointGuard is originally created
// pointGuard = { name: 'steph', jerseyNumber: 30 }; // error: active property is missing