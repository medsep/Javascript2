/*$(function(){
    //alert("We are ready")
    function buildACat() {
        var catName = "Mr Tippy";
        function catFactory() {
            alert(catName);
        }
        catFactory();
    }
    $('#buildcat').click(function(){
        buildACat();
    });
})

//with closure: combines function and environment. Allows storing of info
// and data for later use. 
$(function() {
    function buildACat() {
        var catName = "Tuffy";
        function catFactory() {
            alert(catName);
        }
        //we will just return a reference, no exccution
        return catFactory;
    }
    $('#buildcat').click(function() {
        var myNewCat = buildACat();
        myNewCat();
    })
})*/
//module pattern
a = (function() {
    var privateFunction = function() {
        alert('Hello');
    }

    return {
        publicFunction : function() {
            privateFunction();
        }
    }();
})
a.publicFunction();