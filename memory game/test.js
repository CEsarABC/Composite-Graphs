
// Memory game

/* this game will be based in a colors memory game
the point will be to create a random sequence of colors
for the user to input the same sequence and advance
just if the sequence is equal to the random sequence
given by the computer*/

$(document).ready(function () {

    $(blueDiv).click(function () {
        $(blueDiv).fadeTo('slow',0.5);
        $(blueDiv).fadeTo('slow',1);
    });

    $(yellowDiv).click(function () {
        $(this).fadeTo('slow',0.5);
        $(this).fadeTo('slow',1);
    });

    $(redDiv).click(function () {
        $(redDiv).fadeTo('slow',0.5);
        $(redDiv).fadeTo('slow',1);
    });

    $(greenDiv).click(function () {
        $(greenDiv).fadeTo('slow',0.5);
        $(greenDiv).fadeTo('slow',1);
    });

    $(purpleDiv).click(function () {
        $(purpleDiv).fadeTo('slow',0.5);
        $(purpleDiv).fadeTo('slow',1);
    });

    function blueF() {
    $(blueDiv1).click(function () {
        $(this).fadeTo('slow', 0.5);
        $(this).fadeTo('slow', 1);
    });
    }

    function redF() {
    $(redDiv1).click(function () {
        $(this).fadeTo('slow', 0.5);
        $(this).fadeTo('slow', 1);
    });
    }

    var color1 = $(blueDiv);
    var color2 = $(yellowDiv);
    var color3 = $(redDiv);
    var color4 = $(greenDiv);
    var color5 = $(purpleDiv);

    var arrayColors = [color1,color2,color3,color4,color5];

    function randomColors() {
    arrayColors.sort(function(a, b){return 0.5 - Math.random()});
    }

    randomColors();


    //blueF();
    //redF();
//////////////////////////////
    function colorOne() {
        $(arrayColors[0]).fadeTo('slow', 0.5);
        $(arrayColors[0]).fadeTo('slow', 1);
    }

    function colorTwo() {
        $(arrayColors[1]).fadeTo('slow', 0.5);
        $(arrayColors[1]).fadeTo('slow', 1);
    }

    function colorThree() {
        $(arrayColors[2]).fadeTo('slow', 0.5);
        $(arrayColors[2]).fadeTo('slow', 1);
    }
//////////////////////////////

    var arrayF = [colorOne,colorTwo,colorThree];

    console.log(arrayF[0]);

    /*function arrayR() {
    arrayF.sort(function(a, b){return 0.5 - Math.random()});
    }

    arrayR();*/

    //arrayF[1];

    //console.log(arrayF[0]);

    function loopF() {
        var i;
        for(i = 0; i < arrayF.length; i++){
        arrayF[i]();
        }
    }
    loopF();

});
