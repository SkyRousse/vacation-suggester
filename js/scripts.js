$(function() {
  $("form#travel-survey").submit(function(event) {
    event.preventDefault();

    var environment = $("input[name=environment]:checked").val();
    var preference = $("input[name=preference]:checked").val();
    var bestDay = $("input[name=best-day]:checked").val();
    var lastMeal = $("input[name=last-meal]:checked")val();
    var fun = $("input[name=fun]:checked")val();

    
  })
});
