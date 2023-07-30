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

app.get('/', (req, res) => {
	res.render('index', { projects });
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/project/:id', (req, res) => {
	const { id } = req.params;
	const text = projects[id]
	const { technologies } = text
	res.render('project', { text, technologies });
});



/***********************************************************
ERROR HANDLERS
***********************************************************/
// 404 Error Handler
app.use((req, res, next) => {
	const err = new Error('Page Not Found');
	err.status = 404;
    res.render('page-not-found', { err })
});

//Global Error Handler
app.use((err, req, res, next) => {
	res.locals.err = err;
	res.status(err.status);
	err.message = err.message || `Something went wrong on the server.`;
	res.status(err.status || 500).render('error', { err });
});

app.listen(3000, () => {
	console.log('Running on localhost:3000');
});
