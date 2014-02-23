var express = require('express'),
	path = require('path'),
    app = express();

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
