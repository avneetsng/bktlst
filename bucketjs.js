 var t =$("#bucketnumber").text();
 //making an array of <li>s
 var bucketlist = ["<li class='list-group-item'>The initial goals</li>","<li class='list-group-item'>Another silly goal</li>"];
//removing bucket list 
$('ul').on( "click",'li' , function(e){
    $(this).fadeOut(500,function(){
 $(this).remove(); 
 t--;
   $("#bucketnumber").text(t);
    });
    e.stopPropagation();
});

//adding bucket list via enter 
$('input').keypress( function(e){
    if(e.which === 13)
    { var input = $(this).val();
    	if(input.length != 0){
       $(this).val("");
     
           $('ul').append("<li class='list-group-item'> "  +input+  "</li>");

              
       t++;
       $("#bucketnumber").text(t);
      }
       
    }
        });
       // adding bucket list via button
        $('button').click( function(){
       { var input = $("input").val();
       	if(input.length != 0){
       $("input").val("");
       $('ul').append("<li class='list-group-item'> "  +input+  "</li>");
       t++;
       $("#bucketnumber").text(t);
     }
       
    }
        });
     
       
