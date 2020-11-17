const assert = require('assert');
const MarioChar = require('../models/mario');

//Desribe tests
describe('saving items', function () {
  //create tests
  it('saves an item to the databse', function (done) {
    var item = new MarioChar({
      name: 'Mario',
      weight: 5,
    });
    // save new item to the database
    // promise. wait until the item is saved then do the testing
    item.save().then(function () {
      // true if we created the item locally
      // false when its saved to the databse
      assert(item.isNew === false); // checking for false because we want it to be saved to the database
      done(); //our test is done, move to the next one
    });
  });
});
