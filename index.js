//$(document).ready(function(){
//    $('#enviar').click(function() {

//        $("input:checked").each(function() {
        
//         var a = $('#resultado').append($(this).attr("value"))
       
 //       });
      
 //     });
//})

function check() {
    
   var checar = document.forms[0];
   var i
   var txt = " "
   for(i = 0; i < checar[i]; i++){
       if (checar[i].checked) {
           txt = txt + checar[i].value+ " "
       }
       console.log(checar)
   }

    console.log(checar)
    
    
     
    
}
