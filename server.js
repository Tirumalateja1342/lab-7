const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

// Middleware to parse form data and log requests
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files from the "public" directory
const publicPath = path.join(__dirname, 'public');
server.use(express.static(publicPath));

// Redirect the root path to the form's URL
server.get('/', (req, res) => {
  res.redirect('/ITC505/Lab-7/index.html');
});

// POST handler for form submissions
server.post('/ITC505/Lab-7/index.html', (req, res) => {
  const { adjective, noun, verb, place, pluralNoun } = req.body;

  console.log('Form data received:', req.body);

  if (!adjective || !noun || !verb || !place || !pluralNoun) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out all fields in the form.</p>
      <a href="/ITC505/Lab-7/index.html">Go Back to the Form</a>
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
    <a href="/ITC505/Lab-7/index.html">Go Back to the Form</a>
  `);
});

// Start the server
const port = 8080; // Adjust this if needed
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
