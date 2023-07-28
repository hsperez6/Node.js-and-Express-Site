const express = require('express');
const app = express();

const { projects } = require('./data.json');


/***********************************************************
STATIC
***********************************************************/
app.use('/static', express.static('public'));

/***********************************************************
SETTING
***********************************************************/
app.set('view engine', 'pug');


/***********************************************************
ROUTES
***********************************************************/
// const index = require('./routes');
// const cardRoutes = require('./routes/cards');

// app.use(mainRoutes);
// app.use('/cards', cardRoutes);

app.get('/', (req, res) => {
    res.render('index', {projects})
});

/*
app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/project/:id', (req, res) => {
	const { id } = req.params;
	const text = projects[id]
	res.render('project', { text });
});






// at the end
app.use((req, res, next) => {
	const  err  =  new  Error('Not Found');
	err.status  =  404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error  =  err;
	res.status(err.status);
	res.render('error');
});


*/

app.listen(3000, () => {
	console.log('Running on localhost:3000');
});