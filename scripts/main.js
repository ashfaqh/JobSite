/**
 * Created by ashfaq on 04/05/2015.
 */

var formValidateObject = {
    rules: {
        phone: {
            digits: true,
            minlength: 10
        }
    },
    errorPlacement: function(error, element) {
        var errordiv = element.next("div");
        errordiv.replaceWith(error);
        error.addClass("error-message");
        element.addClass("error");
        setTimeout(function () {
            error.fadeOut();
            error.replaceWith(errordiv);
        }, 5000);
    }
};

$(function(){

    var recruiterForm = $(".recruiter-form");
    var candidateForm = $(".candidate-form");
    var headerNav = $("header > nav");
    var formOpen = false;

    recruiterForm.hide();
    candidateForm.hide();

    $("#recruiter_form_button").on("click", function() {
        recruiterForm.show('slow');
        headerNav.slideUp("50");
        formOpen = true;
    });

    $("#candidate_form_button").on("click", function(){
        candidateForm.show('slow');
        headerNav.slideUp("50");
        formOpen = true;
    });

    $(".remove-button").on("click", function(){
        recruiterForm.hide('slow');
        candidateForm.hide('slow');
        headerNav.slideDown("50");
        formOpen = false;
    });

    $(window).scroll(function(event){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > (2 / 3 * $(window).height())) {
            headerNav.slideUp("200");
        } else if (!formOpen) {
            headerNav.slideDown("200");
        }
    });

    $("#recruiter_form").validate(formValidateObject);
    $("#candidate_form").validate(formValidateObject);

    $("#recruiter_form").submit(function(event){
        event.preventDefault();
    });

    $("#candidate_form").submit(function(event){
        event.preventDefault();
    });
});