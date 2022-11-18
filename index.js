const express = require('express');
const app = express();
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
app.listen(port)

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'));
app.set('layout', 'base');
app.use(bodyParser.urlencoded({extended: false}));

const homepageRoute = require('./routes/homepage');

app.use(homepageRoute);
