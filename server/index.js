const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = 4000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/api/contact', (req, res) => {
  const success = false;
  const payload = {};
  console.log(req.body);

  // TODO: Do validation and push error messages (if any) to payload.
  // payload.errors = [];


  if(success) {
    res.status(200);
    payload.message = 'Your message has been sent!';
  } else {
    res.status(422);
  }

  res.json(payload);
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));