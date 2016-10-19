$(document).ready(function() {
  $("form").submit(function(event) {
    var personName = $("input#person1").val();
    $(".person1").text(personName);
    $(this).children("div").children("p").prepend("<b>Dear </b>");
    $("#story").toggle();
    event.preventDefault();
});
});
