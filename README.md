# Unhandled Error in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled errors within asynchronous middleware.  When an asynchronous operation throws an error, and that error isn't properly caught, the server may crash without providing informative error messages.

## Bug
The `bug.js` file contains an Express.js server with an asynchronous route handler. The `someAsyncOperation` function simulates an asynchronous task that might throw an error.  Currently, the error handling is incomplete, resulting in an unhandled rejection if the asynchronous operation fails.

## Solution
The `bugSolution.js` file shows how to properly handle errors in asynchronous middleware using a `try...catch` block or `.catch()` in the `then()` block within the route handler.  This ensures that errors are gracefully handled and the server doesn't crash.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` (to see the error). 
4. Run `node bugSolution.js` (to see the correct implementation).