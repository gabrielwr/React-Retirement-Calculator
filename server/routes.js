const router = require('express').Router();


// const exampleRouter = require('./path/to/router')


// router.use('example', exampleRouter )

//404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

//Error Handler
router.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});

module.exports = router
