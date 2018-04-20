$(document).ready(function(){
    // $( this ).click(function() {
    //    alert($( this ).prop('tagName'));
    // });

    $("#showall").hide();

   $( "h1.hide" ).click(function() {
       $(this).slideUp();
    });

    $( "h1.highlight" ).click(function() {
       $(this).css('background-color', "red");
    });

    $("#hideall").click(function(){
        $("h1").hide();
        $("#hideall").hide();
        $("#showall").show();
    });

     $("#showall").click(function(){
        $("h1").show();
        $("#hideall").show();
        $("#showall").hide();
    });

    var tagstocount = 'h1';
    var ptags = $('h1').length;
    alert('Your page have '+ptags+' '+tagstocount+' tags ')

    $("#dowhile").click(function(){
        var age = 0;
        do{
            var age = prompt("Enter a valid number between 18 and 35");
        }while(age < 18 || age > 35)
        var toh = 100 - age;
        $("#dowhiletext").text("You are great "+age+" years old and will be 100 in "+toh);
    })

    
});