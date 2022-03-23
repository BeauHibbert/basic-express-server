'use strict';

function validateRequest(req, res, next) {

  if (req.body.name) {
    res.status(200).send(`{ name: "${req.name}" }`);
  } else {
    next({ status: 500, message: 'no name with request' });
  }

}

module.exports = validateRequest;