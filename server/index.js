const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const session = require('express-session');


//express Variables
const app = express();
const PORT = process.env.PORT || 3000;

//static serving middleware
app.use(express.static(path.join(__dirname, '../public')));

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session middleware
app.use(session({
  secret: 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}));

// logging middleware:
app.use(volleyball);

//routes:
app.use('/api', routes);


app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});

//Error handling middleware
app.use((err, req, res, next) =>  {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

//Sends index.html file to client on all get requests
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
