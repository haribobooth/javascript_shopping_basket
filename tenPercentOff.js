tenPercentOff = {
  discount: function(basket){
    if(basket.finalTotal === undefined){
      var subtotal = basket.calculateTotal();
    } else {
      var subtotal = basket.finalTotal;
    }

    if(subtotal > 20){
      basket.finalTotal = (subtotal * 0.9).toFixed(2);
    } else {
      basket.finalTotal = subtotal;
    }
  }
}

module.exports = tenPercentOff
