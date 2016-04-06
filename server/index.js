var port = 80;
var express = require('express');
var app = express();

app.use('/allison-jared/what-did-they-say', function(req, res) {
    res.send('Marriage is hard, but totally worth it.');
});
app.use('/megan', function(req, res) {
    res.send('You are the heartbeat of my life. I love you.  And I totally would have figured out the suitcase thing.');
});

app.listen(port);

console.log('Server running at http://localhost:' + port);

