# typescript-tutorial

## A tutorial repository for typescript.
This repository contains a typescript fundamental tutorial. This will also serve as a reference for me whenever I feel like going back to the basics of typescript.

### Branches

**main** - The base repository. Every subsequent repositories are based from this branch.
***

**01-compiling-typescript** - Lesson on how to compile typescript into javascript.
To compile a typescript file into a javascript file, first you need to install the **typescript** package library globally on your system.
```
npm install typescript -g
```
By installing typescript into our system locally, we are now able to use the **tsc** command to compile a typescript file. So first, open a terminal where your current typescript file is located and run the tsc command.
```
tsc sandbox.ts // sandbox.ts is our typescript file, this will compile sanbox.ts to sandbox.js
```
You will notice that everytime we make changes to our typescript file **(sandbox.ts)** we need to run **tsc** command again and again. To automatically watch for changes in our typescript file, we can use the **-w** command.
```
tsc sandbox.ts -w
```
***

**02-type-basics** - Lesson on the basic variable types of typescript.
In typescript, when we set a variable into a type of something, for example a string, we cannot change the type of it or assign a new value type to it unlike in javascript.
```typescript
let player = 'steph';
player = false; // typescript will not allow this since character is already declared as type of string.
player = 30; // typescript will not allow this since character is already declared as type of string.
player = 'klay'; // typescript will allwow this because we are assigning a string again.
```
When creating a function that accepts a parameter, we can pass any parameter type we want in that function and typescript will allow that.
```typescript
const sayHello = name => console.log(`Hello ${name}!`);
sayHello(true);
```
Now **sayHello(true)** does not make any sense in here because we want to say hello to a person. A person usually has a name of type string. In typescript, we can explicitly tell a function that we are expecting a paramter of specific type. In the case of sayHello, we want a parameter of type string.
```typescript
const sayHello = (name: string) => {
    console.log(`Hello ${name}!`);
};
sayHello('Steph Curry');
```
By explicitly saying that we want a string type parameter for **sayHello** function, typescript will now strict that function and passing a type other than string will result in an error.
***

**03-objects-arrays** - Lesson on objects and array types of typescript.
In typescript, when we declare an array of same types and push a new value to the array but with a different type, typescript will not allow it.
```typescript
const warriors = ['steph', 'klay', 'draymond'];
warriors.push('andre'); // typescript will allow this
warriors.push(100); // typescript will not allow this
```
However, declaring an array of different types is allowed. But whatever types you declared initially will be the only type you can re-assign or push to it.
```typescript
const warriors = [300, 'steph', 'klay']; // notice we declared 2 types here, a number and string, which means we can only push a type of number or string in this array.
warriors.push('draymond'); // typescript will allow this because this is a string
warriors.push(100); // typescript will allow this because this is a number
warriors.push(true); // typescript will not allow this because this is a boolean
```
The same with objects, if we declare an object, whatever property type we declared to it initially cannot be changed.
```typescript
const pointGuard = {
    firstName: 'steph',
    lastName: 'curry',
    jerseyNumber: 30
};

pointGuard.firstName = 'shaun'; // typescript will allow this because firstName is a string
pointGuard.lastName = 'livingston'; // typescript will allow this because lastName is a string
pointGuard.jerseyNumber = 34; // typescript will allow this because jerseyNumber is a number

pointGuard.firstName = 23; // typescript will not allow this because firstName is a string and we are assigning a number
pointGuard.jerseyNumber = 'draymond'; // typescript will not allow this because jerseyNumber is a number and we are assigning a string
```
Declaring a new property inside an object that is not part of the initial declaration is also not allowed in typescript.
```typescript
const pointGuard = {
    firstName: 'steph',
    lastName: 'curry',
    jerseyNumber: 30
};

pointGuard.shoeBrand = 'under armour'; // typescript will not allow this because shoeBrand is not a property of the object when it was first created
```
You can completely change the value of the object in typescript as long as the new value have all the properties of the original object.
```typescript
let pointGuard = {
    firstName: 'steph',
    lastName: 'curry',
    jerseyNumber: 30
};

pointGuard = {
    firstName: 'shaun',
    lastName: 'livingston',
    jerseyNumber: 34
}; // typescript will allow this
```
Changing the value of an object but removing a property is not allowed in typescript.
```typescript
let pointGuard = {
    firstName: 'steph',
    lastName: 'curry',
    jerseyNumber: 30
};

pointGuard = {
    firstName: 'shaun',
    lastName: 'livingston'
}; // typescript will not allow this because jerseyNumber is missing in the new object value
```
The same goes for adding a new property in an object, typescript will not allow this.
```
let pointGuard = {
    firstName: 'steph',
    lastName: 'curry',
    jerseyNumber: 30
};

pointGuard = {
    firstName: 'shaun',
    lastName: 'livingston',
    jerseyNumber: 34,
    status: retired // adding status property here will not be allowed because property does not exists when pointGuard object was first created
};
```
