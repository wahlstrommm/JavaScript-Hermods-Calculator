function calc(){
	var a = parseInt(document.querySelector("#value1").value);// den tar den första elementet i dokumentet som har klassen "value1". Tänk "första raden".
	var b = parseInt(document.querySelector("#value2").value);// den tar den första elementet i dokumentet som har klassen "value2". Tänk "andra raden".
	var op = document.querySelector("#operator").value;//operator 
	var calculate;
	if (op == "add") {
		calculate = a + b; //räkna ut a + b
	}
	else if (op == "sub") {
		calculate = a - b;//räkna ut a - b
	}
	else if (op == "div") {
		calculate = a / b; //räkna ut a / b
	}
	else if (op == "mul") {
		calculate = a * b;//räkna ut a * b
	}

	if(calculate == 0) {
   		document.getElementById("resultat").style.color ="green"; //om värdet är lika med 0 ska reslutatet visas i grön färg
 	} else if (calculate > 0) {
  	 	document.getElementById("resultat").style.color ="blue";//om värdet är större än 0 ska reslutatet visas i blå färg
 	} else {
 		document.getElementById("resultat").style.color ="red";//om värdet är mindre än 0 ska reslutatet visas i röd färg
 	}


	document.querySelector("#resultat").innerHTML = calculate; //tar value1 och value 2 och visar resulatet och den visar i min div ruta.
	alert(calculate); //alert rutan som visar mitt resulat

}