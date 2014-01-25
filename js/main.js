/* 
Project 1 - VAT
Web Workshop Spring 2014
Arissa Brown
https://github.com/recked/
*/

//Document Primed 

$(document).ready(function () {
    $('#good1').hide();
    $('#good2').hide();
    $('#good3').hide();

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

    // document.getElementById("notice").innerHTML = data + " arrived at " + what;

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

// Filling the modal with info for each membership and for each coupon

$("#good1").click(function (event) {

    $("#membership").html('<h4>Thank you for choosing the Frugal plan.</h4>');
    if ($('#mem1').find('#drag1').length == 1) { //checking if this coupon is in this membership
        $("#amount").html('$5 off 3 month membership');
        $("#total").append(' $52');
    } else if ($('#mem1').find('#drag2').length == 1) {
        $("#amount").html('$10 off 6 month membership');
        $("#total").append(' $104');
    } else if ($('#mem1').find('#drag3').length == 1) {
        $("#amount").html('$25 off 1 year membership');
        $("#total").append(' $203');
    }

});
$("#good2").click(function (event) {

    $("#membership").html('<h4>Thank you for choosing the Pro plan.</h4>');
    if ($('#mem2').find('#drag1').length == 1) {
        $("#amount").html('$5 off 3 month membership');
        $("#total").append(' $112');
    } else if ($('#mem2').find('#drag2').length == 1) {
        $("#amount").html('$10 off 6 month membership');
        $("#total").append(' $224');
    } else if ($('#mem2').find('#drag3').length == 1) {
        $("#amount").html('$25 off 1 year membership');
        $("#total").append(' $443');
    }

});
$("#good3").click(function (event) { //Make these values for total something different since the membership is free

    $("#membership").html('<h4>Thank you for choosing the Attonery plan.</h4>');
    if ($('#mem3').find('#drag1').length == 1) {
        $("#amount").html('You have registered for a 3 month membership');
        $("#total").append(' Free');
    } else if ($('#mem3').find('#drag2').length == 1) {
        $("#amount").html('You have registered for a 6 month membership');
        $("#total").append(' Free');
    } else if ($('#mem3').find('#drag3').length == 1) {
        $("#amount").html('You have registered for a 1 year membership');
        $("#total").append(' Free');
    }

});

// when the user clicks continue or clicks outside the modal, clear the page
$('#clear').click(function (event) {
    $('#blank').html('<div class="jumbotron"><div class="container"><h2>Thank you for enrolling in Vampire Association of Transylflorida</h2><p class="lead"><a class="text-muted" href="project1.html">Click here to start over.</a></p></div></div>');
});
$('#good').on('hidden.bs.modal', function (e) {
    $('#blank').html('<div class="jumbotron"><div class="container"><h2>Thank you for enrolling in Vampire Association of Transylflorida</h2><p class="lead"><a class="text-muted" href="project1.html">Click here to start over.</a></p></div></div>');
})