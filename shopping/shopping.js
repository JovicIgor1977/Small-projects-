(function execution() {
  function Product(name, price, expirationDate) {
    this.productId = Math.floor(Math.random() * (99999 - 9999) + 9999);
    this.name = name;
    this.price = parseInt(price).toFixed(2);
    this.expirationDate = new Date(expirationDate);

    this.getInfo = function() {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase() +
        this.productId +
        ", " +
        this.name +
        ", " +
        this.price
      );
    };
  }

  function ShoppingBag() {
    this.listOfProducts = [];

    this.addProduct = function(product) {
      if (product.expirationDate > new Date()) {
        this.listOfProducts.push(product);
      }
    };
    this.averageCost = function() {
      var sum = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        sum += parseInt(this.listOfProducts[i].price);
      }
      sum /= this.listOfProducts.length;
      sum = sum.toFixed(2);
      return "Average value of products in basket is: " + sum + " dinars";
    };

    this.mostExpensive = function() {
      var max = parseInt(this.listOfProducts[0].price);
      var exp = this.listOfProducts[0].name;
      var currentElement, currentElementName;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        currentElement = parseInt(this.listOfProducts[i].price);
        currentElementName = this.listOfProducts[i].name;
        if (currentElement > max) {
          max = currentElement;
          exp = currentElementName;
        } else {
          max, exp;
        }
      }
      return (
        "The most expensive product in shopping bag is " +
        exp +
        " with value of: " +
        max +
        " dinars"
      );
    };
    this.calculateTotalPrice = function() {
      var totalPrice = 0;
      for (var i = 0; i < this.listOfProducts.length; i++) {
        totalPrice += parseInt(this.listOfProducts[i].price);
      }
      return totalPrice;
    };
  }

  function PaymentCard(accountBalance, validityDate) {
    this.accountBalance = parseFloat(accountBalance.toFixed(2));
    
    
    this.isActive = function() {
      if ( new Date(validityDate) < new Date()) {
        return false;
      }
      return true;
    };
    this.validityDate = new Date(validityDate);
  }
  function checkOutAndBuy(bag, card) {
    if (card.validityDate > new Date()) {
      console.log( card.validityDate);
      if (bag.calculateTotalPrice() <= card.accountBalance) {
        console.log("Purchase is successful");
      } else {
        var total = bag.calculateTotalPrice() - card.accountBalance;
        console.log("Amount that is missing is: " + total + " dinars");
      }
    } else {
      console.log("Card is not valid!");
    }
  }
  var banana = new Product("Banana", 263.99, "2019,12,8");
  var hleb = new Product("Hleb", 165.0, "2019,12,5");
  var deterdzent = new Product("Deterdzent", 138.9, "2019,3,9");
  console.log(deterdzent.getInfo());
  var shoppingBag1 = new ShoppingBag();
  var visa = new PaymentCard(500, "2019, 5, 7");
  shoppingBag1.addProduct(banana);
  shoppingBag1.addProduct(hleb);
  shoppingBag1.addProduct(deterdzent);

  console.log(shoppingBag1.averageCost());
  console.log(shoppingBag1.mostExpensive());
  console.log(shoppingBag1.calculateTotalPrice());

  checkOutAndBuy(shoppingBag1, visa);
})();
