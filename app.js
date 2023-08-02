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
    console.log(err.message)
    res.render('page-not-found', { err })
});

//Global Error Handler
app.use((err, req, res, next) => {
	res.locals.err = err;
	err.status = 500;
	err.message = `Something went wrong on the server.`;
	res.status(err.status).render('error', { err });
    console.log(err.message)
});

app.listen(3000, () => {
	console.log('Running on localhost:3000');
});
