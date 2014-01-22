//Custom JS for project 1

//jquery 

$(document).ready(function () {
    $('#good1').hide();
    $('#good2').hide();
    $('#good3').hide();

    // $('#good').modal();


});

//Starter code
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();



    var data = ev.dataTransfer.getData("Text"); //data is id of image
    var f = document.getElementById(data); // f is object of the image
    ev.target.appendChild(f);

    var what = ev.target.id; //id of the memebership boxes. 

    document.getElementById("notice").innerHTML = data + " arrived at " + what;

    // continue btn controls
    if (what == 'mem1') {
        $('#good2').hide();
        $('#good3').hide();

        $('#good1').show();

    } else if (what == 'mem2') {
        $('#good1').hide();
        $('#good3').hide();

        $('#good2').show();
    } else if (what == 'mem3') {
        $('#good2').hide();
        $('#good1').hide();

        $('#good3').show();
    } else {
        $('#good1').hide();
        $('#good2').hide();
        $('#good3').hide();

    }


}


// Filling the modal with info for each membership

$("#good1").click(function (event) {

    $("#membership").html('Thank you for choosing the Frugal plan');

});
$("#good2").click(function (event) {

    $("#membership").html('Thank you for choosing the Pro plan');


});
$("#good3").click(function (event) {

    $("#membership").html('Thank you for choosing the Attonery plan');


});

// Filling the modal with info for each coupon. Check for each coupon type and store the one based on which one is in the container?

$("#good1").click(function (event) {

    $("#amount").html('3 months');

});
$("#good2").click(function (event) {

    $("#amount").html('6 months');


});
$("#good3").click(function (event) {


    $("#amount").html('1 year');

});