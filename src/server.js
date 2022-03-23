'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validateRequest = require('./middleware/validator.js');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');


const app = express();


// function sendOkay(req, res, next) {
//   res.send('OKAY');
// }

// function paramHandler(req, res, next) {
//   console.log(req.params);
//   res.send('You hit a route with a parameter!');
// }

// function handleQuery(req, res, next) {
//   console.log('log from handle query: ', req.query);
//   next();
// }


app.use(express.json());
app.use(logger);

app.get('/person', validateRequest);

app.use(handle404);
app.use(handle500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on PORT ' + PORT);
    });
  },
};