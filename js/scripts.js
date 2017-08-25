// Backend Logic
function Pizza(crust, toppings) {
  this.crust = crust;
  this.toppings = toppings;
  this.finalPrice = 0;
}
function Crust(name, diameter) {
  this.name = name;
  this.diameter = diameter;
}
Pizza.prototype.pizzaPriceCalulator = function () {
  var totalPrice = 0;
  var numberOfToppings = 0;
  // Adds the base price of the crust which is $1 per inch in diameter
  totalPrice += this.crust.crustSize();
  this.toppings.forEach(function(){
    numberOfToppings += 1;
  });
  totalPrice += numberOfToppings * (this.crust.crustSize() / 10);
  totalPrice = Number(totalPrice).toFixed(2);
  return totalPrice;
};

Crust.prototype.crustSize = function() {
  return this.diameter;
}






// Frontend Logic
$(document).ready(function(){
  var pizzaCrust;
  var pizza;
  var toppingsSelection = [];
  var crustSize = 3;
  $("#home").click(function(){
    location.reload();
  });
  $("#about").click(function(){
    alert("This page is still under construction. Try another.");
  });
  $("#other").click(function(){
    alert("This page is still under construction. Try another.");
  });
  // Mock changes page to order page
  $("#order").click(function(){
    $("#order").addClass("active");
    $("#home").removeClass("active");
    $("#main-page").hide();
    $("#order-pizza").css({"visibility":"visible"});
    $("#pizza-size-radio").show();
    $("#pizza-maker input").change(function() {
      crustSize = parseInt($("input[name=pizzaSize]:checked").val());
      if(crustSize === 3){
        $(".circle").css({"height": "450px", "width":"450px"});
        pizzaCrust = new Crust("Jumbo", 16);
      } else if(crustSize === 2){
        $(".circle").css({"height": "400px", "width":"400px"});
        pizzaCrust = new Crust("Large", 14);
      } else if(crustSize === 1){
        $(".circle").css({"height": "350px", "width":"350px"});
        pizzaCrust = new Crust("Medium", 12);
      } else if(crustSize === 0){
        $(".circle").css({"height": "300px", "width":"300px"});
        pizzaCrust = new Crust("Small", 10);
      }
    });
    $("#next-size").click(function(){
      $("#pizza-size-radio").hide();
      $("#pizza-topping-checkbox").show();

      // Code to append selected toppings to a list
      $("#next-toppings").click(function(){
        $("#crust-size").text(pizzaCrust.name);
        $('input[name=pizzaToppings]:checked').each(function(i){
            $("#pizza-summary-toppings").append("<li>" + $(this).val() + "</li>");
            toppingsSelection.push($(this).val());
        });

        pizza = new Pizza(pizzaCrust, toppingsSelection);

        $("#final-price").text(pizza.pizzaPriceCalulator());

        $("#pizza-topping-checkbox").hide();
        $("#pizza-summary").show();
        $("form#pizza-maker").submit(function(event){
          event.preventDefault();
          alert("Order submitted! Have a great day! :D")
          location.reload();
        })
      });
    });
  });

});
