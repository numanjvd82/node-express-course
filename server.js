const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const userData = [
  { name: 'Numan', id: 1 },
  { name: 'Mani', id: 2 },
];

app.get('/users', (req, res) => {
  console.log(res);
  res.json({
    success: true,
    message: 'Succesfully Got Users.',
    users: userData,
  });
});

app.get('/user:id', (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: 'Succesfully retrieved the user',
    user: req.params.id,
  });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = 'SlayerN5';
  const mockPassword = 'ubisoft';

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'Successfully Log In',
      token: 'encrypted token goes here',
    });
  } else {
    res.json({
      success: false,
      message: "Username and Password don't match",
    });
  }
});

app.listen(8000, () => {
  console.log('Server is Running on localhost 8000');
});
