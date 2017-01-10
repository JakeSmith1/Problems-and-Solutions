var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/:text', function (req, res) {
  console.log('get / recieved with text param: ', req.params.text);
  res.send(req.params.text.split('-').join(' '))
})

// app.get('/greeting', function (req, res) {
//   console.log('greeting recieved', req.body);
//   res.send('Hello There!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
