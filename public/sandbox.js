"use strict";
// const shoot = () => {
//     console.log('Shoot the ball!');
// }; // inferred by typescript automatically as a function
// shoot = 'Steph Curry'; // not allowed (function to string)
// let shoot: Function; // explicitly saying that shoot is a function
// shoot = () => {
//     console.log('Shoot the ball!');
// }; // assigning a function to variable shoot
// shoot();
// const shoot = (player: string, point: number) => {
//     console.log(`${player} shot the ball from a ${point} point distance!`);
// }; // declaring a function that accepts player as string and point as number
// shoot('Steph Curry', 3); // allowed (string, number)
// shoot(3, 'steph'); // not allowed (number, string)
// const shoot = (player: string, point: number, assist: string|number) => {
//     console.log(`${player} shot the ball from a ${point} distance! ${assist} with the assist!`);
// }; // declaring a function that accepts player as string, point as number and assist as union of string|number
// shoot('Steph Curry', 3, 'Draymond'); // 3rd parameter is a string
// shoot('Steph Curry', 3, 23); // 3rd parameter is a number
// shoot('Steph Curry', 3); // not allowed, 3rd parameter is missing
// shoot('Steph Curry', 3, true); // not allowed, 3rd parameter is a boolean
// const shoot = (player: string, point: number, assist?: string|number) => {
//     console.log(`${player} shot the ball from a ${point} distance! ${assist ? assist + 'with the assist!' : ''}`);
// }; // declaring a function that accepts player as string, point as number and assist as union of string|number
// shoot('Steph Curry', 3, 'Draymond'); // 3rd parameter is a string
// shoot('Steph Curry', 3); // allowed since 3rd parameter is optional
// const shoot = (player: string, point: number, assist: string|number = 'Draymond') => {
//     console.log(`${player} shot the ball from a ${point} distance! ${assist ? assist + 'with the assist!' : ''}`);
// }; // declaring a function that accepts player as string, point as number and assist as union of string|number
// shoot('Steph Curry', 3, 'Draymond'); // 3rd parameter is a string
// shoot('Klay Thompson', 3); // 3rd parameter is empty but 'Draymond' is the default parameter
// const displayCurrentPlay = (player: string, point: number) => {
//     return `${player} shot the ball from a ${point} point distance!`;
// }; // this function returns a string
// let currentPlay = displayCurrentPlay('Steph Curry', 3); // typescript will automatically infer that the currentPlay variable will always be a string
// console.log(currentPlay);
// currentPlay = 3; // not allowed since currentPlay should be a string
// const shoot = (player: string): string => {
//     return `${player} took the shot!`;
// };
// const play = shoot('Steph Curry'); 
// console.log(play);
const shoot = (player) => {
    console.log(`${player} took the shot!`);
};
shoot('Steph Curry');
