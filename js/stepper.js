
$(document).ready(function () {
    $('.ml-step-content').hide();
    $('.expanded').nextUntil('.ml-step-header').slideToggle();
    $("#overnight").click();


});
$('#Next-st1').click(function (e) {

    $('#step1').removeClass("expanded");
    $('#step1').find('.ml-step-numbers').empty();
    $('#step1').find('.ml-step-numbers').removeClass('ml-current-step');
    $('#step1').addClass("completed").nextUntil('.ml-step-header').slideToggle();
    //$('#step1').find('.ml-step-numbers').addClass('ml-completed-step ');
    $('#step1').next('.ml-step-content').addClass('completed');

    $('#step2').addClass("expanded").nextUntil('.ml-step-header').slideToggle();
    $('#step2').find('.ml-step-numbers').addClass("ml-current-step");


});
$('#Next-st2').click(function (e) {


    $('#step2').removeClass("expanded");
    $('#step2').find('.ml-step-numbers').empty();
    $('#step2').find('.ml-step-numbers').removeClass('ml-current-step');
    $('#step2').addClass("completed").nextUntil('.ml-step-header').slideToggle();
    // $('#step2').find('.ml-step-numbers').addClass('ml-completed-step fa');
    $('#step2').next('.ml-step-content').addClass('completed');

    $('#step3').toggleClass("expanded").nextUntil('.ml-step-header').slideToggle();
    $('#step3').find('.ml-step-numbers').toggleClass("ml-current-step");


});

$('#step1').click(function (e) {

    if ($(this).hasClass('completed')) {
        $(this).toggleClass("expanded").nextUntil('.ml-step-header').slideToggle();
        //$(this).find('.ml-step-numbers').toggleClass('ml-current-step');
       
        $('#step2').removeClass("expanded").nextUntil('.ml-step-header').hide();
        $('#step3').removeClass("expanded").nextUntil('.ml-step-header').hide();
        $('#step4').removeClass("expanded").nextUntil('.ml-step-header').hide();
        $('#step5').removeClass("expanded").nextUntil('.ml-step-header').hide();
        $('#step2').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step3').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step4').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step5').find('.ml-step-numbers').removeClass("ml-current-step");
    }

});
$('#step2').click(function (e) {


    $(this).toggleClass("expanded").nextUntil('.ml-step-header').slideToggle();
    //$(this).find('.ml-step-numbers').toggleClass('ml-current-step');

    $('#step1').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step3').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step4').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step5').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step2').find('.ml-step-numbers').addClass("ml-current-step");

    $('#step3').find('.ml-step-numbers').removeClass("ml-current-step");
  //  $('#step2').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step3').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step4').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step5').find('.ml-step-numbers').removeClass("ml-current-step");


}); 

$('#step3').click(function (e) {


    $(this).toggleClass("expanded").nextUntil('.ml-step-header').slideToggle();
    //$(this).find('.ml-step-numbers').toggleClass('ml-current-step');

    $('#step1').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step2').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step4').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step5').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step3').find('.ml-step-numbers').addClass("ml-current-step");

    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step2').find('.ml-step-numbers').removeClass("ml-current-step");

    $('#step4').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step5').find('.ml-step-numbers').removeClass("ml-current-step");


    }); 
    
$('#step4').click(function (e) {


    $(this).toggleClass("expanded").nextUntil('.ml-step-header').slideToggle();
    //$(this).find('.ml-step-numbers').toggleClass('ml-current-step');

    $('#step1').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step2').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step2').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step3').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step5').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step4').find('.ml-step-numbers').addClass("ml-current-step");

    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
  
    $('#step2').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step3').find('.ml-step-numbers').removeClass("ml-current-step");
       
        $('#step5').find('.ml-step-numbers').removeClass("ml-current-step");


}); 
$('#step5').click(function (e) {


    $(this).toggleClass("expanded").nextUntil('.ml-step-header').slideToggle();
    //$(this).find('.ml-step-numbers').toggleClass('ml-current-step');

    $('#step1').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step2').removeClass("expanded").nextUntil('.ml-step-header').hide();                   
    $('#step3').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step4').removeClass("expanded").nextUntil('.ml-step-header').hide();
    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step5').find('.ml-step-numbers').addClass("ml-current-step");

    $('#step1').find('.ml-step-numbers').removeClass("ml-current-step");
    $('#step2').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step3').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step4').find('.ml-step-numbers').removeClass("ml-current-step");
        $('#step4').next('.ml-step-content').addClass('completed');
        $('#step4').find('.ml-step-numbers').addClass('ml-completed-step');
        $('#step4').find('.ml-step-header').addClass('completed');
        $('#step4').addClass('completed');
        


});