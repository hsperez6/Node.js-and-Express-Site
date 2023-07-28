const express = require('express');

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