var assert = require('assert');
var item = require('../item');

describe('item', function(){
  it('should have a type', function(){
    assert.equal('beer', item.beer.type);
  });

  it('should have a price', function(){
    assert.equal(10.99, item.beer.price);
  });
});
