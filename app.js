require('dotenv').config();
const express = require('express');
const path = require('path');
import phonesList from './phones.json';

// DB config
require('./configs/db.config');
const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);


const phoneRouter = require('./routes/phone.routes')
app.use('/api/phones', phoneRouter);

// ROUTE FOR SERVING REACT APP (index.html)
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    });

//ERROR HANDLING
app.use((req, res) => {
    return res.status(404).json({ message: "Not found"});
})

module.exports = app;