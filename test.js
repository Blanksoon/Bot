var app = require('express')();
var port = process.env.PORT || 7777;
app.post('/webhook', (req, res) => {
  console.log('ff')
    res.sendStatus(200)
});

app.listen(port, function () {
  console.log('run at port', app.get('port'))
})