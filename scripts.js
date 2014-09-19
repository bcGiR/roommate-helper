var mode = false; // mode starts in simple(false)
var mates = {}; // roommates
var rent = 0; // monthly rent
var sqft = 0; // total house square feet (complex calc)

$(document).ready(function () {
    var display_mode = function () {
        if (mode) {
            $("#mode").text("Mode: Complex");
        } else {
            $("#mode").text("Mode: Simple");
        }
    };

    $("#add_rm_button").click(function () {
        var name = $("#name").val()
        $("#roommates").append("<h3>" + name + "</h3>");
        mates[name] = 0; 
    });

    $("#switch").click(function () {
        console.log("switch");
        if (mode) {
            mode = false;
        } else {
            mode = true;
        }
        display_mode();
    });
    display_mode();
});
