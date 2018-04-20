/**
 * @author: sc
 * date : 21st Feb 2018
 * last modified : 23rd Feb 2018
 * A simple calculator program that calculates the sum, difference, ratio and multipe of two numbers.
 * Also adds some functionalities to make it more user friendly and trap errors.
 */
$(function() {
  //Disable Delete and Clear All buttons where ther is nothing to clear.
  $("#delete").prop("disabled", true);
  $("#clearall").prop("disabled", true);
  $("#calculate").prop("disabled", true);
  $("#equal").prop("disabled", true);

  //Handle onclick event on Calculate and = buttons.
  $("#calculate, #equal").click(function() {
    //get the value that the user wants to calculate
    var value = $("#mathinput").val();
    //if value is valid
    if (value) {
      //here we are splitting the value to extract the numbers that
      //needs to added. So if we have 8+9, we will have an array that contains
      //only 8 and 9 e.g. arr = [8,9] so arr[0] will return 8 and arr[1] will return 9
      var valarr = value.split(/\+|\-|X|x|\*|\//);
      var first = parseFloat(valarr[0]);
      var second = parseFloat(valarr[1]);
      console.log(valarr);
      //Here we are doing the calculation by calling the calculate function.
      //We are rounding the answer to two decimal figures if the number is not
      //a whole number.
      var answer = Math.round(calculate(value, first, second) * 100) / 100;
      //Self explanatory, isNaN is an inbuilt javascript function that checks if
      //the returned number is a nunber, the ! at the beginning is a negation operator.
      //set the input field to the appropriate results.
      if (!isNaN(answer)) {
        $("#mathinput").val(answer);
      } else {
        $("#mathinput").val("Error");
      }
    } else {
      alert("Value is Empty");
    }
  });

  $("#clearall").click(function() {
    $("#mathinput").val("");
    monitorClearing();
  });

  $("#delete").click(function() {
    if ($("#mathinput").val().length > 0) {
      $("#mathinput").val(
        $("#mathinput")
          .val()
          .substring(0, $("#mathinput").val().length - 1)
      );
    }

    monitorClearing();
  });

  //Call or Activate action when buttons are clicke.
  onButtonClick("#nine");
  onButtonClick("#eight");
  onButtonClick("#seven");
  onButtonClick("#six");
  onButtonClick("#five");
  onButtonClick("#four");
  onButtonClick("#three");
  onButtonClick("#two");
  onButtonClick("#one");
  onButtonClick("#zero");

  onButtonClick("#times");
  onButtonClick("#minus");
  onButtonClick("#plus");
  onButtonClick("#divide");

  onButtonClick("#dot");
  //onButtonClick("#equal");
  //This controls what happens when a button is clicked.
  function onButtonClick(buttonid) {
    $(buttonid).click(function() {
      var value = $(buttonid).text();
      //alert(value);
      var valtocalc = $("#mathinput")
        .val()
        .concat(value);
      //alert(valtocalc);
      $("#mathinput").val(valtocalc);
      monitorClearing();
    });
  }
  //This function makes sure appropriate button are disabled/enabled based
  //on the status of the input field. E.g. if input text field is empty then
  function monitorClearing() {
    if ($("#mathinput").val().length > 0) {
      $("#delete").prop("disabled", false);
      $("#clearall").prop("disabled", false);
      $("#calculate").prop("disabled", false);
      $("#equal").prop("disabled", false);
    } else {
      $("#delete").prop("disabled", true);
      $("#clearall").prop("disabled", true);
      $("#calculate").prop("disabled", true);
      $("#equal").prop("disabled", true);
    }
  }

  //calculate function takes three argument.
  //@param: value - the enetered text
  //@param: first - the first value after splitting
  //@param: second - the second value after splitting
  function calculate(value, first, second) {
    var ans = 0;
    if (value.includes("+")) {
      ans = first + second;
    } else if (value.includes("-")) {
      ans = first - second;
    } else if (
      value.includes("x") ||
      value.includes("X") ||
      value.includes("*")
    ) {
      ans = first * second;
    } else if (value.includes("/")) {
      ans = first / second;
    }
    return ans;
  }
});
