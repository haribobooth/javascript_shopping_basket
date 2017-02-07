loyaltyDiscount = {
  discount: function(basket){
    if(basket.finalTotal === undefined){
      var subtotal = basket.calculateTotal();
    } else {
      var subtotal = basket.finalTotal;
    }

    if(basket.loyaltyCard){
      basket.finalTotal = (subtotal * 0.95).toFixed(2);
    } else {
      basket.finalTotal = subtotal;
    }
  }
}

module.exports = loyaltyDiscount;
