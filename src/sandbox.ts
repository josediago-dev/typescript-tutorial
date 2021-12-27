// function signatures

// Creating a function signature that accepts 2 parameters and returns void
// arg1: string
// arg2: string
let shoot: (arg1: string, arg2: number) => void;

// assigning a new function to function shoot with the CORRECT signature
shoot = (name: string, point: number) => {
    console.log(`${name} took the shot from a ${point} point distance!`);
};

shoot('Steph Curry', 3);

// assigning a new function to function shoot with the INCORRECT signature
// shoot = (point: number, name: string) => {
//     return `${name} took the shot from a ${point} point distance!`;
// };