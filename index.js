$(document).ready(function(){
    $('#enviar').click(function() {

        $("input:checked").each(function() {
        
         var a = $('#resultado').append($(this).attr("value"))
       
        });
      
      });
})

function contador() {
    var res = document.getElementById('resultado')
    console.log(res)
    console.log(typeof(res[0]))
    
    
    
    
     
    
}
