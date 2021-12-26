// let player:string; // we are explicitly saying that player is always of type string
// player = 'Steph Curry'; // typescript will allow this because the value we are assigning to player is a string
// // player = 30; // typescript will not allow this because the value we are assigning to player is a number
// let playerInfo: object;
// playerInfo = {
//     name: 'Steph Curry',
//     jerseyNumber: 30
// };
// playerInfo = 'Steph Curry';
// let warriors: string[];
// warriors = ['Steph', 'Klay', 'Draymond'];
// warriors = [30, 11, 23];
// warriors = ['steph', 30];
// let warriors: string[];
// warriors.push('steph');
// let warriors: string[] = [];
// warriors.push('steph');
// let warriors: (string|number)[] = []; // variable warriors is of type string or number (string|number)
// warriors.push('steph'); // allowed
// warriors.push(30); // allowed
// warriors.push(true); // not allowed
// let warriorId: string|number;
// warriorId = 'stephCurry';
// warriorId = 30;
// warriorId = 'stephCurry30';
// warriorId = false;
// warriorId = {};
// let pointGuard: object; // pointGuard is explicitly of type object
// pointGuard = { name: 'Steph Curry', jerseyNumber: 30, active: true }; // allowed (object)
// // pointGuard = 'Steph Curry'; // not allowed (string)
// pointGuard = ['Steph Curry', 30, true]; // allowed (array)
// console.log(pointGuard);
var pointGuard;
// pointGuard = { name: 'steph curry', jerseyNumber: 30, active: true }; // allowed
// pointGuard = [];
// pointGuard = { name: 'steph curry', jerseyNumber: 30 }; // not allowed
// pointGuard = { name: 'steph curry', jerseyNumber: 30, active: true, injured: false }; // allowed
