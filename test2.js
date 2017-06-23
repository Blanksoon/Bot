const line = require('@line/bot-sdk');
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express();

const client = new line.Client({
  channelAccessToken: 'r+Xpxb3DpVJI3c89AJYaz40Kjv7LYKj+8EdAnS3gwv9GtHgmefm9wjjBTM2Cs2jaYLyXP0oRgw1MCisaeZ4kWhrja1PDjvlw1plYo5ewqCFzlSKhcTvu7AVEMk+mt1JxePc28R/mIEQCzCDpv6DAVAdB04t89/1O/w1cDnyilFU='
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

app.use(express.bodyParser());
app.set('port', (process.env.PORT || 4000))

app.get('/', function(req, res){
  // var text = request.body.events.message.text
  // var sender = request.body.events.source.userId
  // var replyToken = request.body.events.replyToken
  //console.log(text);      // your JSON
  //console.log(sender);      // your JSON
  //console.log(replyToken);      // your JSON
  response.send(req.body);    // echo the result back
  //response.sendStatus(200)
});

app.post('/', function(req, res){
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  //console.log(text);      // your JSON
  //console.log(sender);      // your JSON
  //console.log(replyToken);      // your JSON
  res.send(req.body);    // echo the result back
  if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
    console.log("in text")
    client.replyMessage( replyToken, message)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
    }
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
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  })
}

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
