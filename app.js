const express = require('express');
const app = express();
const db = require('./DB/Db');

var path = require('path');
app.use(express.static(`${__dirname}/public`));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public/overview.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
