const express = require('express');
const path = require('path');
const engine = require('ejs-mate');

// Initializations
const app = express();
require('./db');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});