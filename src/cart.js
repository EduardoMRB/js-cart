var Cart = (function ($) {

  function Cart (cart) {
    this.list = cart.querySelector('ul');
    this.setEventListeners();
  }

  Cart.prototype.setEventListeners = function () {
    var items = this.list.querySelectorAll('li'),
        self = this;

    $(items).on('click', '[data-role="delete"]', function () {
      self.delete(this);
    });

  };

  Cart.prototype.delete = function (element) {
    element.parentNode.removeChild(element);
  };

})(jQuery);
