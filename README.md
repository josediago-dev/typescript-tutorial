# typescript-tutorial

## A tutorial repository for typescript.
Credit to Net Ninja for this tutorial. (https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)

### Branches
* **main** - The base repository. Every subsequent repositories are based from this branch.
* **01-compiling-typescript** - Lesson on how to compile typescript into javascript.
  * To compile a typescript file into a javascript file, first you need to install the typescript package library globally on your system.
  ```
  npm install typescript -g
  ```
  * By installing typescript into our system locally, we are now able to use the **'tsc'** command to compile a typescript file.
  ```
  tsc sandbox.ts // sandbox.ts is our typescript file, this will compile sanbox.ts to sandbox.js
  ```
