bogof = {
  quantities: {},
  offerItems: [],
  deduction: 0,

  addOfferItem: function(itemType){
    this.offerItems.push(itemType);
  },

  countQuantities: function(basket){
    for(var item of basket.itemsInBasket){
      if(this.quantities[item.type] === undefined){
        this.quantities[item.type] = 1;
      } else {
        this.quantities[item.type]++;
      }
    }
  },

  calculateDeduction: function(basket){
    this.countQuantities(basket);

    for(var item of basket.itemsInBasket){
      if(this.quantities.hasOwnProperty(item.type))
      if(this.quantities[item.type] % 2 > 0){
        this.quantities[item.type] -= 1;
      }
      this.deduction += item.price * (this.quantities[item.type] / 2);
      this.quantities[item.type] = 0;
    }
  },

  discount: function(basket){
    if(basket.finalTotal === undefined){
      basket.finalTotal = basket.calculateTotal();
    }

    this.calculateDeduction(basket);
    basket.finalTotal -= this.deduction;
    basket.finalTotal = (basket.finalTotal).toFixed(2);
  }
}

module.exports = bogof;
