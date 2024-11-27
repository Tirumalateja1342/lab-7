const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

// Middleware to parse form data and log requests
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Route to generate a random number
server.get('/do_a_random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`Your random number is: ${randomNumber}`);
});

// Serve static files
const publicPath = path.join(__dirname, 'public');
server.use(express.static(publicPath));

// POST handler for the form submission
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { adjective, noun, verb, place, pluralNoun } = req.body;

  console.log('Form data received:', req.body);

  if (!adjective || !noun || !verb || !place || !pluralNoun) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out all fields in the form.</p>
      <a href="/ITC505/lab-7/index.html">Go Back to the Form</a>
    `);
    return;
  }

  const madLib = `
    Once upon a time, in a ${adjective} ${place}, there lived a ${noun} who loved to ${verb}.
    This ${noun} had many ${pluralNoun}, and they all lived happily ever after.
  `;

  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to the Form</a>
  `);
});

// Start the server
const port = process.argv[2] === 'local' ? 8080 : 80;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
