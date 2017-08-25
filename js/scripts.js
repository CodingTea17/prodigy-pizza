// Backend Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.finalPrice = 0;
}

Pizza.prototype.pizzaPriceCalulator = function () {
  var addUpPrice = 0;
  // Adds the base price of the crust which is $1 per inch in diameter
  addUpPrice += parseInt(this.size);


};






// Frontend Logic
$(document).ready(function(){
  // Mock changes page to order page
  $("#order").click(function(){
    $("#main-page").hide();
    $("#order-pizza").css({"visibility":"visible"});
    $("#pizza-size-radio").show();
    // $("#pizza-topping-checkbox").hide();
    var crustSize = "3";
    $("#pizza-maker input").change(function() {
      crustSize = parseInt($("input[name=pizzaSize]:checked").val());
      if(crustSize === 3){
        $(".circle").css({"height": "450px", "width":"450px"});
      } else if(crustSize === 2){
        $(".circle").css({"height": "400px", "width":"400px"});
      } else if(crustSize === 1){
        $(".circle").css({"height": "350px", "width":"350px"});
      } else if(crustSize === 0){
        $(".circle").css({"height": "300px", "width":"300px"});
      }
    });
    $("#next-size").click(function(){
      $("#pizza-size-radio").hide();
      $("#pizza-topping-checkbox").show();
      // Code to append selected toppings to a list?

      $("#next-toppings").click(function(){

        $("#pizza-topping-checkbox").hide();
        $("#pizza-summary").show();
      });
    });
  });

});
