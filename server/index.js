const express = require('express');
const app = express();

const port = 4000;

app.post('/api/contact', (req, res) => {
  const success = false;
  const payload = {};

  // TODO: Do validation and push error messages (if any) to payload.
  // payload.errors = [];

  // Params are available at req.query.

  if(success) {
    res.status(200);
    payload.message = 'Your message has been sent!';
  } else {
    res.status(422);
  }

  res.json(payload);
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));