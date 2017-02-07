var assert = require('assert');
var loyaltyDiscount = require('../loyaltyDiscount');
var basket = require('../basket');
var item = require('../item')

describe('five percent off when basket has loyalty card', function(){
  it('should reduce a total by 5% if the basket has a loyalty card', function(){
    basket.empty();
    basket.finalTotal = undefined;
    basket.loyaltyCard = true;
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.crisps);
    basket.checkDeal(loyaltyDiscount);
    assert.equal(26.57, basket.finalTotal);
  });
});
