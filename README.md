# typescript-tutorial

## A tutorial repository for typescript.
This repository contains a typescript fundamental tutorial. This will also serve as a reference for me whenever I feel like going back to the basics of typescript. This is inspired by Net Ninja's Typescript Tutorial.

[Net Ninja Youtube Channel](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

### Branches
- [Main](#main)
- [Compiling Typescrit](#compiling-typescript)
- [Basic Types](#basic-types)
- [Objects And Arrays](#objects-and-arrays)
- [Explicit Types](#explicit-types)
- [Dynamic Types](#dynamic-types)

# Main
The base repository. Every subsequent repositories are based from this branch.
***

# Compiling Typescript
Lesson on how to compile typescript into javascript.
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

# Basic Types
Lesson on the basic variable types of typescript.
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

# Objects And Arrays
Lesson on objects and array types of typescript.
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

# Explicit Types
Lessons about explicit types.
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
***

# Dynamic Types
We have been discussing about explicitly defining the type of our variables. But sometimes, we want to declare a variable and set its type to **any** type.
We may want it to be string and then number for some reason or whatever use case you currently have. We can do this by using the **any** typescript syntax.
```typescript
let pointGuard: any; // type is any
pointGuard = 'Steph Curry'; // allowed (string)
console.log(pointGuard); // output: 'Steph Curry'
pointGuard = 30; // allowed (number)
console.log(pointGuard); // output: 30
```
Using **any** though discards the benefit of typescript. We will not get any errors by assigning a new type to the pointGuard object. We can change our pointGuard type whatever type we want, which makes this variable unpredictable.

It is useful though when you are not sure what the type of the data you are getting which will then be stored to the variable you created. Maybe the data is coming from an outside source and you want to store it in a variable, but you are not sure what the type of data you will be getting from that outside source. Then using **any** is a safe way to do it.

But most of the time, the best practice is to always have control on how your data will look like. This gives you and your code the confidence that it will always work the way you expect it to work.

Using **any** in an array is also pretty straightforward.
```typescript
let warriors: any[] = []; // type is array of any type
warriors.push('steph'); // allowed (string)
warriors.push(30); // allowed (number)
warriors.push({ active: true }); // allowed (object)
console.log(warriors); // output: ['steph', 30, { active: true }]
```

Using **any** in an object is also pretty straightforward. But just like our object examples from our previous topics, we can't add or remove a property from our object.
```typescript
let pointGuard: { name: any, jerseyNumber: any, active: any }; // object properties are of any type
pointGuard = { name: 30, jerseyNumber: 'steph', active: { isActive: true } }; // allowed (name is a number, jerseyNumber is a string)
console.log(pointGuard); // output: { name: 30, jerseyNumber: 'steph', active: { isActive: true } }
pointGuard = { name: 'steph', jerseyNumber: 30, active: true, injured: false }; // error: injured is not a property when pointGuard is originally created
pointGuard = { name: 'steph', jerseyNumber: 30 }; // error: active property is missing
```
With the example above you may notice that behaviour of your code can start to get weird without properly defining the type of your variables. A **name** property with a **number**. A **jerseyNumber** property with a **string**. So use **any** cautiously and consider it as your last option if possible.
***

# Better Workflow And Config
Throughout this tutorial, we have been using **tsc** to compile our typescript file into javascript file and using **-w** to watch for changes in our sanbox.ts file and automatically build it.
```terminal
tsc sanbox.ts -w
```
In a real world application, we are going to have folders that contains our public files and source files.
```
project
|--   public
    |--   index.html
    |--   styles.css
    |--  sandbox.js
|--   src
    |--   sandbox.ts
```
Now we have sandbox.ts inside the src folder. However, if we try to build this file using the **tsc** command. The sandbox.js file will also be created inside the src folder. We don't want that. What we want is to build the typescript file inside the src folder and put the javascript file in public folder automatically.
We can achieve that by using a **tsconfig.json** file. To create a new tsconfig.json file, we execute the command below in our root project folder.
```bash
tsc --init
```
Once you run this command, a new tsconfig.json will be automatically created for you. The tsconfig.json file will have some defaults configration, also included are some of the configuration options we can use.
Now, what we are interested in right now is the **rootDir** configuration inside our tsconfig.json file. Right now it is pointing to **"./"**. What we want is to point it to our src folder.
Also, we want out **outDir** to point to our public folder because that is where we want to store our compiled javascript file.
```json
{
    ...
    "rootDir": "./src",
    "outDir": "./public",
}
```
By changing the rootDir and outDir configuration, we can now compile our typescript file by just running the **tsc** command and nothing else. Remember, we can still include the **-w** option so that we are still automatically watching for changes in our typescript files.
```bash
tsc -w
```
By running the tsc command, it will look for our tsconfig.json file, once it sees the rootDir and outDir, it will know which typescript files it needs to compile and where to put the javascript files after.
Now, if you try to create a new typescript file inside your src folder, typescript will automatically create the equivalent javascript file of that typescript file and put it in the public folder.
There is only one problem with this setup and we have one missing configuration that we need to add. For example, if you try to create a new typescript file in the root folder, not in the src folder. You will notice that it compile that typescript file and generate a new javascript file in the root folder.
```
project
|--   public
    |--   index.html
    |--   styles.css
    |--  sandbox.js
|--   src
    |--   sandbox.ts
|-- test.ts
|-- test.js
```
In the above file structure, you will notice a **test.ts** and **test.js** file in our root directory. 
But wait, didn't we configure our tsconfig.json file to look inside the src folder for typescript files and generate the javascript files in our public folder? Well, that is true, but what we basically told tsconfig is **'when we build a typescript file inside the scr folder, I want you to put the javascript files in the public folder'**. That's it.
We did not tell tsconfig to ignore any other typescript files created outside the src folder. In order for us to do that, we can add another configuration inside our tsconfig.json file. This time it should be on the same level as **compilerOptions**. The configuration we need to add is **include**. This is the current config that we have. This will tell tsconfig to only include the typescript files inside the **include** property.
```json
{
    "compilerOptions": {
        ...
        "rootDir": "./src",
        "outDir": "./public",
    },
    "include": ["src"]
}
```
With this, if you now try to create a new typescript file outside the src folder, it will not be compiled and there will be no javascript file generated for it.
Remember, for more details on all of the configurations available for us in tsconfig.json file, visit the official documentation of [typescript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
