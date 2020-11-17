const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//connect to the database before testrun
before(function (done) {
  //connect to mongodb
  // if database doesnt exist, it will create it for us
  mongoose.connect('mongodb://localhost/batata');
  // .once -> its an event listener (ONLY ONCE)
  mongoose.connection
    .once('open', function () {
      console.log('Connection has been made :)');
      done();
    })
    .on('error', function (error) {
      // .on, keep looking for errors
      console.log('Connection error: ', error);
    });
});
