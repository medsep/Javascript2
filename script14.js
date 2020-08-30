$(function() {
    //alert('got here');
    $("#tabs").tabs().tabs("add", "index13.html", "Click-a-med");
    $("#datepicker").datepicker({
      onSelect: function(dateText, inst) {
        $('#title').text("You picked: " + dateText);
      }
    });
  });