var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

describe('basket', function(){
  it('should be able to hold items', function(){
    basket.addItem(item.beer);
    assert.equal(1, basket.itemCount());
  });

  it('should be able to be emptied', function(){
    basket.addItem(item.beer);
    basket.empty();
    assert.equal(0, basket.itemCount());

  });

  it('should be able to remove items', function(){
    basket.addItem(item.beer);
    basket.addItem(item.crisps);
    basket.removeItem('crisps');
    assert.equal(1, basket.itemCount());
  });

  it('should be able to calculate total', function(){
    basket.addItem(item.crisps);
    assert.equal(16.98, basket.calculateTotal());
  });

  it('should be able to have a final total set', function(){
    basket.finalTotal = 150;
    assert.equal(150, basket.finalTotal);
  });

  it('should be able to have loyalty card', function(){
    assert.equal(false, basket.loyaltyCard);
    basket.loyaltyCard = true;
    assert.equal(true, basket.loyaltyCard);
  });
});
