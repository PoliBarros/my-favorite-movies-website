function goAction() {
    location.href = './action.html';
};

function goHeroes() {
    location.href = './heroes.html';
};

function goAdventure() {
    location.href = './adventure.html';
};

function goComedy() {
    location.href = './comedy.html';
};

function goAnimation() {
    location.href = './animation.html';
};

$(document).ready(function() {
    $("h3").fadeOut("slow");
    $("h3").fadeIn("slow");

    $("#advenDescr").text("Adventure film is a genre that revolves around the conquests and explorations " +
        "of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but " +
        "often the main focus is simply the pursuit of the unknown. These films " +
        "generally take place in exotic locations and play on historical myths.");

    $("#contact").text("Contact")


});