var assert = require('assert');
var bogof = require('../bogof');
var basket = require('../basket');
var item = require('../item');

describe('bogof', function(){
  it('should be able to count quantities', function(){
    basket.empty();
    basket.finalTotal = undefined;
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.crisps);

    bogof.quantities = {};
    bogof.countQuantities(basket);
    assert.equal(2, bogof.quantities['beer']);
    assert.equal(1, bogof.quantities['crisps']);
  });

  it('should be able to calculate the deduction', function(){
    basket.empty();
    basket.finalTotal = undefined;
    bogof.deduction = 0;
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.crisps);

    bogof.quantities = {};
    bogof.addOfferItem(item.beer);
    bogof.calculateDeduction(basket);
    assert.equal(21.98, bogof.deduction.toFixed(2));
  });

  it('should perform bogof on a basket', function(){
    basket.empty();
    basket.finalTotal = undefined;
    bogof.quantities = {}
    bogof.deduction = 0;
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.beer);
    basket.addItem(item.crisps);
    basket.checkDeal(bogof);
    assert.equal(27.97, basket.finalTotal);
  });
});
