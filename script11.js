$(function(){

    //$("#title").text("Yay, I can now get at H1 immediately!");
    //$("#first").html("<h2>Great Quotes</h2>")

    //alert("This works!")

    //append and prepend work inside the given selection
    $("#first").prepend("<h2>Great quotes</h2>");
    $("#first").append("<h3>... for you to ponder ... </h3>")

    //before, after, increaseBefore, increaseAfter work outside
    //the given selection

    //$("#myAnchor").attr("href",  "http://www.bbc.co.uk/news");
    $("#title").addClass("standout");
});



//jQuery('#myFirstParagraph').fadeOut(500).fadeIn(500);

/*$(function(){

    alert("This works 1!")
});

$(function(){

    alert("This works 2!")
});

$(function(){

    alert("This works 3!")
});

//selectors
$('.importantText')
$('#myFirstParagraph')
$('p').fadeOut();
$(document).ready()

$('<div id="badge"><img src="badge.gif" alt="Badge earned for achivement"</div>')

$.myCustomMethod = function() {alert('hi');};

$.listBox = {
    show : function() { },
    hide: function() { },
    position: function() { },
    initiate: function() { }
};*/