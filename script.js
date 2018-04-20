$(function() {
  var results = [];

  //asynchronous
  $.get(
    "http://api.apixu.com/v1/current.json?key=025f46d84f5c42eb83e145438180204&q='St Andrews'",
    function getDataFromAPI(location) {
      results.length = 0; //set results to 0 to get new results for the function
      console.log(data);
      // .get refers to the process of getting actual data we've brought in from the link in line 6

      $.each(data, function(key, value) {
        results.push(value);
      });
      // All of the data we've brought in from the API now in our array for our own consumption
      // each - like a for loop
      console.log(results);
    }
  ).done(function() {
    // do something else when data is gathered. nothing runs until .done
    display_weather(results);
  });

  function display_weather(weatherArray) {
    console.log(weatherArray);
    $("#nameOfPlace").html(weatherArray[0].name);
    $("#temperature").html(weatherArray[1].temp_c + "C");
    $("#humidity").html(weatherArray[1].humidity);
    $("#feelsLike").html(weatherArray[1].feelslike_c + "C");
    $("#wind").html(weatherArray[1].wind_kph + "kph");
  }

  $("button").click(function() {
    getDataFromAPI;
  });
});

var x = 20;
var x = 10;
console.log(x);
