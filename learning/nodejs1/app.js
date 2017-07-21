// User der sich mit der Webseite verbindet
function placeAnOrder(orderNumber) {
  console.log("Customer order: " + orderNumber);
  cookAndDeliverFood(function() {
    console.log("Delivered food order:" + orderNumber);
  });
}

// Äquivalent zu Datenbank Query
// Simuliere eine 5 Sekunden Operation
// Simuliert irgendetwas Zeitkonsumierendes
function cookAndDeliverFood(callback) {
  setTimeout(callback, 5000);
}

// Simulate order placement (web requests)
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
