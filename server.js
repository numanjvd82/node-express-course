const express = require('express');
const app = express();

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

app.listen(8000, () => {
  console.log('Server is Running on localhost 8000');
});
