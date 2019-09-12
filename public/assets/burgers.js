$(document).on("click",".subButton", function (event) {
  // Make sure to preventDefault on a submit event.
  //event.preventDefault();
  console.log(this);


  console.log('Button is clicked')
  var newBurger = {
    name: $("#input").val().trim(),
    devoured: true
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});


$(".change-devoured").on("click",function(event){
  console.log("button clicked");
  var id = $(this).data("id");
  var newDevoured = $(this).data("newdevoured");
  var newDevouredState = {
    devoured: true
  };
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then (
    function(){
      location.reload();
    }
  )
});