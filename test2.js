var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(express.bodyParser());
app.set('port', (process.env.PORT || 4000))

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back
});

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})