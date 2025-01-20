const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(error => {
    // Handle errors that occur inside the asynchronous operation
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
  });
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  //This will cause the error to be unhandled if uncomment
  //throw new Error('Something went wrong!');
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});