// Set up Express and tell it where to find the files required to serve the website
var express = require('express'),
    app = express();
app.use(express.static('public'));

// Set the port to be the default set by Heroku(?) or localhost 5500
var port = process.env.PORT || 6600;

app.listen(port, function() {
  console.log('Server is listening on port 6600. Ready to accept requests!');
});
