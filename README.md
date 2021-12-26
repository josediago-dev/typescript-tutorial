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
***
**04-explicit-types** - Lessons about explicit types.
In typescript, when you declare a variable and give it a value and type, typescript will automatically infer the type of that variable. Infer meaning, a variable declared as a string will always be a string no matter what. You can never assign any other type to it.
```typescript
let player = 'Steph Curry'; // typescript will infer that player is a string
player = 30; // typescript will not allow this because player was inferred to always be a string
```
However, sometimes we do want to declare a variable and not set any value to it. But, we want to explicitly say that we want to this variable to always be a string. So for example, if I just try to create a variable without an initial value and not explicitly set its type, I can change the value and type of it completely.
```typescript
let player; // player is declared without explicitly declaring its type
player = 'Steph Curry'; // player is assigned with a string
player = 30; // player is assigned with a number
```
In the example above, you will see that the player variable is changed from string to number. But we don't want this because we are then wasting what typescript is for. We want to declare a variable and set its type explicitly so that when we accidentally assigned a value to it with a different type, we won't face any issues. This gives us the confidence that we are always aware of what we expect from the variables we declare in our codebase.
Let us tweak our example and explicitly declare the type we want.
```typescript
let player:string; // we are explicitly saying that player is always of type string
player = 'Steph Curry'; // typescript will allow this because the value we are assigning to player is a string
player = 30; // typescript will not allow this because the value we are assigning to player is a number

let jerseyNumber:number; // we are explicitly saying that jerseyNumber is always of type number
jerseyNumber = 30; // typescript will allow this because the value we are assigning to player is a number
jerseyNumber = 'Steph Curry'; // typescript will not allow this because the value we are assigning to player is a string
```
Explicitly declaring the type of an array is also pretty straightforward. However, once you declare an array of string for example, you can never push a number value to that array. It needs to always be an array of string.
```typescript
let warriors: string[]; // array of string
warriors = ['Steph', 'Klay', 'Draymond']; // values are all string
warriors = [30, 11, 23]; // values are numbers, not allowed!
warriors = ['steph', 30]; // values are mixed types, not allowed!
```
It is also important to explicitly say if an array is an empty array when the array is first created. The reason for this is if you did not explicitly say that an array is an empty array, when you use the **.push** method to add a new value in the array, it will throw an error.
```
let warriors: string[];
warriors.push('steph'); // typescript will not show you an error when you are writing this line, but once you run the code, when you open the browser, this will throw an error in the console
```
Let us tweak our example to explicitly define that the array is an empty array so that we can push new values to it.
```typescript
let warriors: string[] = []; // explicitly saying that it is an empty array
warriors.push('steph'); // push will now work
```
Sometimes we want to declare an array with mixed types or **union types**, for example a string and a number. We can also do that in typescript.
```
let warriors: (string|number)[] = []; // variable warriors is of type string or number (string|number)
warriors.push('steph'); // allowed
warriors.push(30); // allowed
warriors.push(true); // not allowed
```
Take note that we can also use union types not just on arrays but also on normal variable declaration.
```typescript
let warriorId: string|number; // warriorId can be a string or a number string|number
warriorId = 'stephCurry'; // allowed
warriorId = 30; // allowed
warriorId = 'stephCurry30'; // allowed
warriorId = false; // not allowed
warriorId = {}; // not allowed
```
Notice though that the union type we declared in warriorId and warriors from the previous example is quite different.
```typescript
let warriorId: string|number; // warriorId can be a string or a number string|number
let warriors: (string|number)[] = []; // variable warriors is of type string or number (string|number)
```
The **warriorId** is not enclosed in parenthesis while **warriors** is enclosed in parenthesis. When we are using union types for arrays, it is important to enclosed that in a parenthesis, otherwise, we don't have to.

Now, in the case of objects, explicitly declaring a variable with a type of object is also pretty straightforward.
```typescript
let pointGuard: object; // pointGuard is explicitly of type object
pointGuard = { name: 'Steph Curry', jerseyNumber: 30, active: true }; // allowed (object)
pointGuard = 'Steph Curry'; // not allowed (string)
```
Take note though, you can assign an array in object because arrays are technically an object.
```typescript
let pointGuard: object; // pointGuard is explicitly of type object
pointGuard = { name: 'Steph Curry', jerseyNumber: 30, active: true }; // allowed (object)
pointGuard = ['Steph Curry', 30, true]; // allowed (array)
```
Now, what if we want to be strict about our object variable? We don't want an array to be assigned to our pointGuard object? We can achieve this by also explicitly identifying the properties of our object.
```typescript
let pointGuard: { name: string, jerseyNumber: number, active: boolean }; // object with properties explicitly defined
pointGuard = { name: 'steph curry', jerseyNumber: 30, active: true }; // allowed
pointGuard = []; // not allowed
pointGuard = { name: 'steph curry', jerseyNumber: 30 }; // not allowed because active is missing
pointGuard = { name: 'steph curry', jerseyNumber: 30, active: true, injured: false }; // not allowed, injured is not a property of pointGuard when it is first created.
```
This way we are sure that pointGuard will always be an object. However, when we assign new values to our pointGuard object, we can't remove or add new property.
