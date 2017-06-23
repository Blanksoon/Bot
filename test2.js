var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(express.bodyParser());
app.set('port', (process.env.PORT || 4000))

app.get('/', function(request, response){
  // var text = request.body.events.message.text
  // var sender = request.body.events.source.userId
  // var replyToken = request.body.events.replyToken
  //console.log(text);      // your JSON
  //console.log(sender);      // your JSON
  //console.log(replyToken);      // your JSON
  response.send(request.body);    // echo the result back
  //response.sendStatus(200)
});

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
      'Authorization': 'Bearer r+Xpxb3DpVJI3c89AJYaz40Kjv7LYKj+8EdAnS3gwv9GtHgmefm9wjjBTM2Cs2jaYLyXP0oRgw1MCisaeZ4kWhrja1PDjvlw1plYo5ewqCFzlSKhcTvu7AVEMk+mt1JxePc28R/mIEQCzCDpv6DAVAdB04t89/1O/w1cDnyilFU='
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