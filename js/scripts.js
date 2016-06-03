/*This file is for your custom js.  All yours*/

$(function(){
  $("#got-survey").submit(function(event) {
    event.preventDefault();

    var conflict = $("input[name=conflict]:checked").val();
    var animal = $("input[name=animal]:checked").val();
    var important = $("input[name=important]:checked").val();
    var origin = $("input[name=origin]:checked").val();
    var fun = $("input[name=fun]:checked").val();
    var totalA = 0;
    var totalT = 0;
    var totalV = 0;
    debugger;
    if (conflict === "a") {
      totalA += 1;
    }
    else if (conflict === "t") {
      totalT += 1;
    }
    else {
      totalV += 1;
    }
    if (animal === "a") {
      totalA += 1;
    }
    else if (animal === "t") {
      totalT += 1;
    }
    else {
      totalV += 1;
    }
    if (important === "a") {
      totalA += 1;
    }
    else if (important === "t") {
      totalT += 1;
    }
    else {
      totalV += 1;
    }
    if (origin === "a") {
      totalA += 1;
    }
    else if (origin === "t") {
      totalT += 1;
    }
    else {
      totalV += 1;
    }
    if (fun === "a") {
      totalA += 1;
    }
    else if (fun === "t") {
      totalT += 1;
    }
    else {
      totalV += 1;
    }
    if (totalA > totalT && totalA > totalV) {
      $("#arya").show();
    }
    else if (totalV > totalA && totalV > totalT) {
      $("#varys").show();
    }
    else {
      $("#tyrion").show();
    }
  });
})
