jQuery(document).ready(function () {
<<<<<<< HEAD
    var API_URL = "http://localhost:4000/add-meta/";
=======
    var API_URL = "https://seedsjobfair.com/cf/add-meta/";
    
    function postMeta(key, value, source, success, error) {
        jQuery.ajax({
            url: API_URL,
            method: "POST",
            data: {
                value: value,
                key: key,
                source: source,
            },
            success: success,
            error: error
        })
    }

    function hasError(element, value, label) {
        if (value == "" || value == null || typeof value == "undefined") {
            alert(label + " required");
            if (element != null) {
                jQuery(element).focus();
            }
            return true;
        }

        return false;
    }


    // contact form
    var form_enquiries = jQuery("form#enquiries");
    var submit_btn_enquiries = form_enquiries.find("input#submit");
    form_enquiries.on("submit", function (ev) {
        ev.preventDefault();

        var data = form_enquiries.serializeArray();

        var toSubmit = {};
        for (var i in data) {
            var name = data[i]["name"];
            var value = data[i]["value"];
            if (hasError(null, value, "All fields are")) {
                return false;
            }
            toSubmit[name] = value;
        }
        
        //var as = JSON.parse(decodeURI(s));

        toSubmit = encodeURI(JSON.stringify(toSubmit));
>>>>>>> 137d8c26840475b92067862a2f49f29292a2c41a

        postMeta("enquiries", toSubmit, "landing_page"
            , function (res) {
                alert("Thank you! Your Enquiries Has Been Successfully Submitted");
                submit_btn_enquiries.removeAttr("disabled", "disabled");
            }, function (err) {
                alert("Something went wrong. Please Try again later " + JSON.stringify(err));
                submit_btn_enquiries.removeAttr("disabled", "disabled");
            });
    });

    // subscribe form
    var form_sub = jQuery("form#subscribe");
    var email = form_sub.find("input#email");
    var submit_btn = form_sub.find("input#submit");


    form_sub.on("submit", function (ev) {
        if (hasError(email, email.val(), "Email is")) {
            return false;
        }

        ev.preventDefault();

        submit_btn.attr("disabled", "disabled");
<<<<<<< HEAD
        jQuery.ajax({
            url: API_URL,
            method: "POST",
            data: {
                key: "subscriber",
                value: email.val(),
                source: "landing_page"
            },
            success: function (res) {
=======

        postMeta("subscriber", email.val(), "landing_page"
            , function (res) {
>>>>>>> 137d8c26840475b92067862a2f49f29292a2c41a
                alert("Thank you! Your Email Has Been Successfully Submitted");
                submit_btn.removeAttr("disabled", "disabled");
            }, function (err) {
                alert("Something went wrong. Please Try again later " + JSON.stringify(err));
                submit_btn.removeAttr("disabled", "disabled");
            });
    });
});