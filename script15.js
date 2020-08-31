$(function(){
    //alert(ATERIS.planet.name);

    //if no JS then this wont work
    //document.write("");

    /*$('#clickMe').click(function() {
        $('#main').append('You should only see this if you click the plus!');
      });*/ 
      
      $('#main').append("<img src='plus-8.png' alt='Click me to see the paragraph' id='clickMe' />");
  
      $('#clickMe').toggle(function() {
        $('#message').show('fast');
        $('#clickMe').attr('src', 'minus-8.png'); 
    
      }, function() {
        $('#message').hide('slow');
        $('#clickMe').attr('src', 'plus-8.png');
      });
    
      $('#message').hide();
    
    });

//This is polluting the global object
//var version = "1.2";
//global object def
/*var ATERIS ={};
ATERIS.version=1.2; 

ATERIS.planet = {
    id: 34,
    name: "Intempesta Nox"
}
//Javascript patterns==>modular, singelton */