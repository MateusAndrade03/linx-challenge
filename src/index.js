const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public' + '/index.html'));
});

app.get('/email-template', (req, res) => {
  res.sendFile(path.join(__dirname, '../public' + '/email-template.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
