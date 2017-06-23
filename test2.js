var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(express.bodyParser());
app.set('port', (process.env.PORT || 4000))

app.post('/', function(request, response){
  var text = request.body.events.message.text
  var sender = request.body.events.source.userId
  var replyToken = request.body.events.replyToken
  //console.log(text);      // your JSON
  //console.log(sender);      // your JSON
  //console.log(replyToken);      // your JSON
  response.send(request.body);    // echo the result back
  if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
    sendText(sender, text)
  }
  //response.sendStatus(200)
});

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น 💞'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer key Api'
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, response, body) {
    if (err) console.log('error')
    if (response) console.log('success')
    if (body) console.log(body)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})