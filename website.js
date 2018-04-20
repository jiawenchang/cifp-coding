   $(".image img:gt(0)").hide();

  x = setInterval(function() {
    $(".image :first-child")
      .slideUp()
      .next("img")
      .slideDown()
      .end()
      .appendTo(".image");
  }, 9000);

  // setInterval(run some function, every x seconds)

  $(".image")
    .click(function() {
      console.log("image stopped");
      clearInterval(x);
    })
    .dblclick(function() {
      console.log("image resumed");
      x = setInterval(function myFunction() {
        $(".image :first-child")
          .slideUp()
          .next("img")
          .slideDown()
          .end()
          .appendTo(".image");
      }, 9000);
    });
});