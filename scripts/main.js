/**
 * Created by ashfaq on 04/05/2015.
 */

$(function(){

    var formOpen = false;

    $(".recruiter-form").hide();
    $(".candidate-form").hide();

    $("#recruiter_form").on("click", function() {
        $(".recruiter-form").show('slow');
        $("header > nav").slideUp("50");
        formOpen = true;
    });

    $("#candidate_form").on("click", function(){
        $(".candidate-form").show('slow');
        $("header > nav").slideUp("50");
        formOpen = true;
    });

    $(".remove-button").on("click", function(){
        $(".recruiter-form").hide('slow');
        $(".candidate-form").hide('slow');
        $("header > nav").slideDown("50");
        formOpen = false;
    });

    $(window).scroll(function(event){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > (2 / 3 * $(window).height())) {
            $("header > nav").slideUp("200");
        } else if (!formOpen) {
            $("header > nav").slideDown("200");
        }
    });

});