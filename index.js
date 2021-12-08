var express = require('express');
var bodyParser = require('body-parser');
var mockHouseList = require('./mocks/houselist.json');
var mockProfile = require('./mocks/profile.json');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.post('/auth', function (req, res) {
  return res
    .status(200)
    .send({ user: req.body.username, token: '123456abcdef' });
});

app.get('/profile', function (req, res) {
  return res.status(200).send(mockProfile);
});

app.get('/houselist', function (req, res) {
  return res.status(200).send(mockHouseList);
});

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
