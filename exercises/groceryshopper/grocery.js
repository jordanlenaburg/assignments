var shopper = {
    customerId: "123",
    favoriteFood: "Avocados",
    amountSpent: 45.62,
    isPreferredCustomer: false,
    lastPurchasedItem: function () {
        console.log("Asparagus");
    },
    groceryCart: ["Tomatoes", "Kale", "Cauliflower", "Carrots", "Avocados"]
};

console.log(shopper.customerId);
console.log(shopper.favoriteFood);
console.log(shopper.amountSpent);
console.log(shopper.isPreferredCustomer);
shopper.lastPurchasedItem();
console.log(shopper.groceryCart[4]);
