/**
 * Created by ashfaq on 04/05/2015.
 */

var validateForm = function(form){
    form.validate({
        rules: {
            phone: {
                digits: true
            }
        },
        errorPlacement: function(error, element){
            var errordiv = element.next("div");
            errordiv.replaceWith(error);
            error.addClass("error-message");
            element.addClass("error");
            setTimeout(function(){
                error.fadeOut();
                error.replaceWith(errordiv);
            }, 5000);
        }
    });
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

    $("#recruiter_form").submit(function(event){
        event.preventDefault();
        validateForm($(this));
    });

    $("#candidate_form").submit(function(event){
        event.preventDefault();
        validateForm($(this));
    });
});