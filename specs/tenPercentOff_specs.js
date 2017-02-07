var assert = require('assert');
var tenPercentOff = require('../tenPercentOff');
var basket = require('../basket');
var item = require('../item')

describe('ten percent off on totals above 20', function(){
  it('should reduce a total by 10% if it is above 20', function(){
    basket.empty();
    basket.finalTotal = undefined;
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.crisps);

    basket.checkDeal(tenPercentOff);
    assert.equal(25.17, basket.finalTotal);
  });

  it('should not reduce small total', function(){
    basket.empty();
    basket.finalTotal = undefined;
    basket.addItem(item.beer);
    basket.checkDeal(tenPercentOff);
    assert.equal(10.99, basket.finalTotal);
  })
});
