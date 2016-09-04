

function calculadora(){
	var primernumero= prompt('Ingrese el Primer Numero');
	var operacion= prompt('Ingrese la Operacion (+,-,*,/)');
	var segundonumero= prompt('Ingrese el Segundo Numero');

		if (operacion==='+'){
		var resultado=parseFloat(primernumero)+parseFloat(segundonumero);
		alert(resultado);
		}
  		else
			if (operacion==='-'){
			var resultado=parseFloat(primernumero)-parseFloat(segundonumero);
			alert(resultado);
   			 }
      	else
			if (operacion==='*'){
			var resultado=parseFloat(primernumero)*parseFloat(segundonumero);
			alert(resultado);
			 }
   		else
			var resultado=parseFloat(primernumero)/parseFloat(segundonumero);
			alert(resultado);

			}
function calculadora2(){
	calculadora();
	var confirmacion=prompt('volvel_a_calcular? (si/no)');
		if(confirmacion==='si'){
		calculadora2();
		}

		else
			alert('gracias');
			}

function global1(){
	var comienzo=prompt('Usar la calculadora (si/no)')
		if(comienzo==='si'){
			calculadora2();}

	else
		alert('gracias');
	
		}

global1();





