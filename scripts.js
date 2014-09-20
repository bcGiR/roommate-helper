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
        if (name != "" && !mates.hasOwnProperty(name)) {
            var roommate = $("<li>" + name + "</li>");
            $("#roommates").append(roommate);
            $(roommate).click(function () {
                delete mates[name];
                $(roommate).remove();
                update();
            });    
            mates[name] = 0;
            update();
        }
    });

    var calc_rent = function () {
        var rent = parseInt($("#rent").val());
        var result = "";
        if (!isNaN(rent)) {
            for (roommate in mates) {
                result += "<h3>" + roommate + ": " + String((rent/Object.keys(mates).length).toFixed(2)); + "</h3>"
            }
            $("#rent_result").html(result);
        }
    };
    $("#rent").change(calc_rent);

    var update_sqft = function () {
        var sqft_html = "";
        for (roommate in mates) {
            sqft_html += '<label for="' + roommate + '">' + roommate + ':' + 
                '</label><input id="' + roommate + '" type="text" name="' + roommate + '"><br>';
        }
        $("#sqft").html(sqft_html);
    };
    
    var update = function() {
        update_sqft();
        calc_rent();
    }

    // when switch button clicked, changes modes
    $("#mode").click(function () {
        update(); 
        $("#complex").toggle();
        if (mode) { // if complex set to simple, else set to complex
            mode = false;
        } else {
            mode = true;
        }
        display_mode();
    });

    // causes mode to show up on first load
    display_mode();
});
