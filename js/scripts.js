// Backend Logic








// Frontend Logic
$(document).ready(function(){
  // Mock changes page to order page
  $("#order").click(function(){
    $("#main-page").hide();
    $("#order-pizza").show();
    $("#pizza-maker input").change(function() {
      if($("input[name=pizzaSize]:checked").val() === "3"){
        $(".circle").css({"height": "400px", "width":"400px"});
      } else if($("input[name=pizzaSize]:checked").val() === "2"){
        $(".circle").css({"height": "350px", "width":"350px"});
      } else if($("input[name=pizzaSize]:checked").val() === "1"){
        $(".circle").css({"height": "300px", "width":"300px"});
      } else if($("input[name=pizzaSize]:checked").val() === "0"){
        $(".circle").css({"height": "250px", "width":"250px"});
      }
    });
    $("#next-size").click(function(){

    })
  });

});
