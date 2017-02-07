var basket = {
  itemsInBasket: [],
  finalTotal: undefined,
  loyaltyCard: false,

  itemCount: function(){
    return this.itemsInBasket.length;
  },

  addItem: function(itemToAdd){
    this.itemsInBasket.push(itemToAdd);
  },

  empty: function(){
    this.itemsInBasket = [];
  },

  removeItem: function(itemType){
    for(var product of this.itemsInBasket){
      if(product.type === itemType){
        var index = this.itemsInBasket.indexOf(product);
        this.itemsInBasket.splice(index, 1);
        break
      }
    }
  },

  calculateTotal: function(){
    var total = 0;
    for(var product of this.itemsInBasket){
      total += product.price;
    }
    return total;
  },

  checkDeal: function(deal){
    deal.discount(this);
  }
}

module.exports = basket;
