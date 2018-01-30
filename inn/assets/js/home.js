jQuery(document).ready(function () {
    var API_URL = "http://localhost:4000/subscribe/";

    var form_sub = jQuery("form#subscribe");
    var email = form_sub.find("input#email");
    var submit_btn = form_sub.find("input#submit");

    // to do api for subscribe
    form_sub.on("submit", function (ev) {
        ev.preventDefault();
        submit_btn.attr("disabled", "disabled");
        jQuery.ajax({
            url: API_URL,
            method: "POST",
            data: {
                email: email.val()
            },
            success: function (res) {
                alert("Thank you! Your Email Has Been Successfully Submitted");
                submit_btn.removeAttr("disabled", "disabled");
            },
            error: function (err) {
                alert(err);
                submit_btn.removeAttr("disabled", "disabled");
            }
        })

    });
});