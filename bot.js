var app = require('express')();
var bodyParser = require('body-parser')
var request = require('request')
//var app = express()
var port = process.env.PORT || 7777;
//app.use(bodyParser.json())

//app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req)
  var text = req.events.replyToken;
  //console.log(text)
  // var sender = req.events[0].source.userId
  // var replyToken = req.events[0].replyToken
  // if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
  //    sendText(sender, text)
  // }
  // res.sendStatus(200)
  //res.send('<h1>Hello Node.js</h1>');
});
//   console.log('in')
//   var text = req.body.events[0].message.text
//   var sender = req.body.events[0].source.userId
//   var replyToken = req.body.events[0].replyToken
//   console.log(text, sender, replyToken)
//   console.log(typeof sender, typeof text)
//   // console.log(req.body.events[0])
//   if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
//     sendText(sender, text)
//   }
//   res.sendStatus(200)
// })

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

app.listen(port, function () {
  console.log('run at port', app.get('port'))
})