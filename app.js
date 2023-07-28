const express = require('express');
const app = express();

const { projects } = require('./data.json');


/***********************************************************
USE
***********************************************************/
app.use(express.static('public'));


/***********************************************************
SETTING
***********************************************************/
app.set('view engine', 'pug');


/***********************************************************
ROUTES
***********************************************************/
const index = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.get('/', (req, res) => {
    res.render('home', {projects})
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/project/:id', (req, res) => {
	res.render('project', {
		prompt: cards[req.params.id].question,
		hint: cards[req.params.id].hint
	});
});
