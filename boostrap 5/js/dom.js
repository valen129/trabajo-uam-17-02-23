console.log("Entramos");

var items=document.getElementsByClassName("item");
var cantidad=items.length; 

console.log("Cantidad de listas " + cantidad);

var div=document.createElement("div");
div;
div.innerText="Aprendiendo JavaScript";

var divUno=document.getElementById("uno");

divUno.appendChild(div);

var lista=document.getElementById("lista");

var hijo=document.createElement("li");
hijo.innerText="li nuevo";
lista.appendChild(hijo);

var parrafo=document.getElementById("par").style.color="red";
var lista=document.getElementById("lista").style.color="green";



