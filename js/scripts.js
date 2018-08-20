
$(document).ready(function() {
  $("#to-do-list").submit(function(event) {
    event.preventDefault();
    var input = $("#to-do").val();

    $("#list").append("<br><input type='checkbox'> " + input);
  });
  
});
