var express = require('express'),
    app = express();

var SERVER_PORT = process.env.PORT || 7702;

app.use('/loremipsum', require('../lib/bootstrap.js')({
  urlRoot : 'loremipsum'
}), function(req, res, next) {
  return res.render('loremipsum', { });
});

var server = app.listen(SERVER_PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.info('Example app listening at http://%s:%s', host, port);
});
