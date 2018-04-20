$(function() {
  var x;
  $(".News > ul > li").dblclick(function() {
    $(this).toggleClass("grey");
  });

  $("a").hover(function() {
    $(this).css("color", "red");
  });
  $("a").mouseout(function() {
    $(this).css("color", "blue");
  });
  $("#athena").mouseout(function() {
    $(this).css("color", "red");
  });
  $("#title").click(function() {
    $(".text").hide();
  });
  $("#second").click(function() {
    $(".News").hide();
  });
  $("#third").click(function() {
    $(".Outgoing").hide();
  });

  // Hide all images that are not 0
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
