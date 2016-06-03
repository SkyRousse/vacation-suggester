$(function() {
  $("form#travel-survey").submit(function(event) {
    event.preventDefault();

    var environment = $("input[name=environment]:checked").val();
    var preference = $("input[name=preference]:checked").val();
    var bestDay = $("input[name=best-day]:checked").val();
    var lastMeal = $("input[name=last-meal]:checked").val();
    var fun = $("input[name=fun]:checked").val();
    var totalCity = 0;
    var totalTown = 0;
    var totalWilderness = 0;
    debugger;

    if (environment === "city") {
      totalCity += 1;
    }
    else if (environment === "town") {
      totalTown += 1;
    }
    else {
      totalWilderness += 1;
    }

    if (preference === "city") {
      totalCity += 1;
    }
    else if (preference === "town") {
      totalTown += 1;
    }
    else {
      totalWilderness += 1;
    }

    if (bestDay === "city") {
      totalCity += 1;
    }
    else if (bestDay === "town") {
      totalTown += 1;
    }
    else {
      totalWilderness += 1;
    }

    if (lastMeal === "city") {
      totalCity += 1;
    }
    else if (lastMeal === "town") {
      totalTown += 1;
    }
    else {
      totalWilderness += 1;
    }

    if (fun === "city") {
      totalCity += 1;
    }
    else if (fun === "town") {
      totalTown += 1;
    }
    else {
      totalWilderness += 1;
    }

    if (totalCity >= totalTown && totalCity >= totalWilderness && environment === "city") {
      $("#berlin").show();
    }
    else if (totalTown >= totalCity && totalTown >= totalWilderness && environment === "town") {
      $("#boonville").show();
    }
    else if (totalWilderness >= totalCity && totalWilderness >= totalTown && environment === "wilderness") {
      $("#windriver").show();
    }
    else {
      $("#resubmit").show();
    }
  })
});
