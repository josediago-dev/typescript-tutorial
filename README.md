# typescript-tutorial

## A tutorial repository for typescript.
Credit to Net Ninja for this tutorial. (https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

### Branches

**main** - The base repository. This repository contains the detailed readme file.
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
let character = 'mario';
character = false; // typescript will not allow this since character is already declared as type of string.
character = 10; // typescript will not allow this since character is already declared as type of string.
character = 'luigi'; // typescript will allwow this because we are assigning a string again.
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
sayHello('Jose Diago');
```
By explicitly saying that we want a string type parameter for **sayHello** function, typescript will now strict that function and passing a type other than string will result in an error.
