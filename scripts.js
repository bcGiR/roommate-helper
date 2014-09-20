var mode = false; // mode starts in simple(false)
var mates = {}; // roommates
var rent = 0; // monthly rent
var sqft = 0; // total house square feet (complex calc)

$(document).ready(function () {
    // function wich causes the mode to show up
    var display_mode = function () {
        if (mode) {
            $("#mode").text("Mode: Complex");
        } else {
            $("#mode").text("Mode: Simple");
        }
    };

    // button adds roommate to the array
    $("#add_rm_button").click(function () {
        var name = $("#name").val();
        if (name != "") {
        var roommate = $("<h3>" + name + "</h3>");
        $("#roommates").append(roommate);
        $(roommate).click(function () {
            delete mates[name];
            $(roommate).remove();
        });    
        mates[name] = 0; 
        }
    });
    
    $("#rent").change(function () {
        var rent = parseInt($(this).val());
        var result = "";
        if (!isNaN(rent)) {
            for (roommate in mates) {
                result += "<h3>" + roommate + ": " + String(rent/Object.keys(mates).length); + "</h3>"
            }
            $("#rent_result").html(result);
        }
    });

    // when switch button clicked, changes modes
    $("#mode").click(function () {
        if (mode) {
            mode = false;
        } else {
            mode = true;
        }
        display_mode();
    });

    // causes mode to show up on first load
    display_mode();
});
