$(function() {
    //alert("Can you see this?")
    $('#clickme').click(function() {
   
       
        $.getJSON('data16.json', function(data) {
    
            var items = [];
    
            $.each(data, function(key, val) {
    
              items.push('<li id="' + key + '">' + val + '</li>');    
    
            });
    
            $('<ul/>', {
              'class': 'interest-list',
              html: items.join('')
            }).appendTo('body');
    
         });
    });
});

    $(document).ready(function() {
      $('button').on('click', function() {
        alert('on click');
       $.ajax({
           url: 'data16.json',
           dataType: 'json',
           success: function(data) {
              var items = [];
              alert('abc');

              $.each(data, function(key, val) {
                items.push('<li id="' + key + '">' + val + '</li>');    
              });

              $('<ul/>', {
                 'class': 'interest-list',
                 html: items.join('')
              }).appendTo('body');

           },
          /*error: function() {
               alert('There was a problem with the server.  Try again soon!');
             }*/
        });
      });

    });
