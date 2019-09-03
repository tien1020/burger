$(document).on("click",".subButton", function (event) {
  // Make sure to preventDefault on a submit event.
  //event.preventDefault();
  console.log(this);


  console.log('Button is clicked')
  var newBurger = {
    name: $("#input").val().trim(),
    devoured: false
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


