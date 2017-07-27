'use strict';
module.exports = function(app) {
  var donateQ = require('../controllers/controller');


  // Routes
  app.get('/', function(req, res) {
    res.setHeader('Cache-Control', 'no-cache');
    res.render('newReg');
    console.log("jhsdb");
  });
  app.route('/query/send')
    .post(donateQ.mailQuery);

  };