function LimpiarFormulario() {
	document.getElementById("miForm").reset();
}

var menor= function (n1, n1, n3){

var n1= parseFloat (document.getElementById("Primer numero").value); 
var n2= parseFloat (document.getElementById("Segundo numero").value);
var n3= parseFloat (document.getElementById("Tercer numero").value); 

if (n1<n2 && n1<n3)
 	{
 		alert("El numero menor es " + n1);
 	}
 	else
 	{
 		if (n2<n3)
 		{
 			alert("El numero menor es " + n2); 
 		}
 		else 
 		{
 			alert("El numero menor es " + n3); 
 		}
 	}
}

var convertir= function (cm) {
	var cm= parseFloat (document.getElementById("Centimetros").value);
	var resultado= cm/2.54; 
	alert (cm + " cm equivalen a " + resultado + " pulgadas");  
	return resultado; 
}

var Convertir= function (Metros) {
	var Metros= parseFloat (document.getElementById("Metros").value); 
	var resultado= Metros*1.09361; 
	alert (Metros + " mts equivalen a " + resultado + " yardas"); 
	return resultado;  
}