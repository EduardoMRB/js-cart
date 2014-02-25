var ShoppingList = (function ($) { 'use strict';
  
  function ShoppingList(cart) {
    this.cart = cart;
  }

  ShoppingList.prototype.addToCart(nodeElement) {
    var item = {
      id: nodeElement.getAttribute('data-product-id'),
      name: nodeElement.textNode,
      quantity: nodeElement.querySelector('[data-quantity]').value
    };

    this.cart.add(item);
  };

})(jQuery);
