$(document).ready(function(){

        var speed=33;
        var delay=1000;
        var xElement=0;


        $(".animate-strikethrough").each(function() {
          var $this = $(this);
          var text =  $this.text();
          var textLength = text.length;
          var $del = $("<del>");
          var x = 0;
          xElement+=1;
          setTimeout(function() {
            setInterval(function() {
              x+=1;
              $del.html(text.substr(0,x));

              $this.html(text.substr(x));

              $this.prepend($del);

            },speed);
            
          },delay*xElement);
               
          
        });

});