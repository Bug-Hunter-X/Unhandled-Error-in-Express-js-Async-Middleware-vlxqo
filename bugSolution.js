const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
  });
});

async function someAsyncOperation() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate an asynchronous operation that might throw an error
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error('Error in someAsyncOperation:', error);
    throw error; // Re-throw the error to be handled by the route handler
  }
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});