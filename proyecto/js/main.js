function comprobarClave(){
	clave1 = document.f1.clave1.value
	clave2 = document.f1.clave2.value

	if(clave1 == "examen" && clave2 == "zoologico"){
		alert("Los datos coinciden...\n Bienvenido");
			var href = "html/personal.html";
			window.location=href;
	}
	else{
		alert("error...\n Intentelo Nuevamente");
			var href = "principal.html";
			window.location=href;
	}
}