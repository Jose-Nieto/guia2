var opcion=true
while (opcion==true){
   var cantidad; 

  var total=0;
  cantidad=parseInt(prompt("Digite cuantos productos ingresara"));
  var producto =new Array(cantidad);
  var precio =new Array(cantidad);
  for(var i=0; i<cantidad; i++){
   
 producto[i]=prompt(" Digite el producto a ingresar")

 
    if(isNaN(producto[i])&& producto[i]!=null && producto[i]!=" "){
precio[i]=parseFloat( prompt(" Digite el precio"));

if(isNaN(precio[i]) && precio[i]===null && precio[i]===""){
    alert(" Ingrese paramentros correctos");
   continue;
}
else{
    
}

    }
    else{
        alert("Ingrese parametros correctos")
        continue;
    }
 }
    opcion=confirm('¿Desea ingresar otro producto? s/n');
    with(document){
        write("<table class=\"tabla\">");
        write("<thead>");
        write("<tr><th>Producto</th>");
        write("<th>Precio</th>");
        write("</thead>");
        write("<tbody>");
        write("<tr><td>"+ producto + " <br></td>");

        write("<td class=\"number\">" + precio + "<br> </td></tr>");
        write("</tbody>");
     
  
       
        write("</table>");
    }
}
