


localStorage.emailLog = '';
localStorage.logPc = 0;

function hideElements(){
	$("#sp1").hide();
	$("#sp2").hide();
	$("#sp3").hide();
	$("#sp4").hide();
	$("#sp5").hide();
	$("#sp6").hide();
	$("#sp7").hide();
	$("#sp8").hide();
}

var y = 0, yg1, yg2, yg3, yg4, yg5;

function MetodoInterNewton(xNew, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5){
		//var a[][] = new double [5][2];
		y = 0;
		var x,fx1x0,fx2x1,fx3x2,fx4x3,fx2x1x0,fx3x2x1,fx4x3x2,fx3x2x1x0,fx4x3x2x1,fx4x3x2x1x0;
		x = xNew;
		a00 = x1;
		a10 = x2;
		a20 = x3;
		a30 = x4;
		a40 = x5;
		a01 = y1;
		a11 = y2;
		a21 = y3;
		a31 = y4;
		a41 = y5;
		fx1x0=(a11-a01)/(a10-a00);
		fx2x1=(a21-a11)/(a20-a10);
		fx3x2=(a31-a21)/(a30-a20);
		fx4x3=(a41-a31)/(a40-a30);
		fx2x1x0=(fx2x1-fx1x0)/(a20-a00);
		fx3x2x1=(fx3x2-fx2x1)/(a30-a10);
		fx4x3x2=(fx4x3-fx3x2)/(a40-a20);
		fx3x2x1x0=(fx3x2x1-fx2x1x0)/(a30-a00);
		fx4x3x2x1=(fx4x3x2-fx3x2x1)/(a30-a00);
		fx4x3x2x1x0=(fx4x3x2x1-fx3x2x1x0)/(a40-a00);
		y=a01+fx1x0*(x-a00)+fx2x1x0*(x-a00)*(x-a10)+fx3x2x1x0*(x-a00)*(x-a10)*(x-a20)+fx4x3x2x1x0*(x-a00)*(x-a10)*(x-a20)*(x-a30);
		//console.log("Y ES IGUAL A  == " + y);
}



function login(){
	console.log('begin');
	
	console.log('start');

	$("#sp1").show();
	
	//spinnerplugin.hide();
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '1', data: $('#formLogIn').serialize()})

			.done(function(data) {
				console.log('json');
				var convertidoAJson = JSON.parse(data);
				var nombre = convertidoAJson['nombre'];
				var apellido = convertidoAJson['apellido'];
				emailLog = convertidoAJson['email'];
				logPc = convertidoAJson['resultado'];
				//console.log(emailLog);
				//console.log(apellido);
				if(logPc === '1'){
					$("#address1").val("");
					$("#pass1").val("");
					
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Thanks for log in "+ nombre + " " + apellido);
				}else{
					paDonde = '';
					
					alert('Email and / or password Invalid');
				}
				$("#sp1").hide();
				//console.log('DONE');
				console.log('sale');
			});
	//spinnerplugin.hide();
			

}

function signUp(){
	var newPass = $("#pass2").val();
	console.log(newPass);
	$("#sp3").show();
	if (newPass !== ''){
		//spinnerplugin.show();
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '2', data: $('#formSignUp').serialize()})
			.done(function(data) {
				var convertidoAJson = JSON.parse(data);
				var nombre = $("#address2").val();
				var apellido = $("#tur2").val();
				var resultado = convertidoAJson['resultado'];
				emailLog = $("#email2").val();
				//console.log(nombre);
				//console.log(apellido);
				//console.log(resultado);
				if(resultado === '1'){
					//getPaciente();
					$("#address2").val("");
					$("#tur2").val("");
					$("#email2").val("");
					$("#pass2").val("");
					//spinnerplugin.hide();
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Thanks for sign up "+ nombre + " " + apellido);
				}else{
					//spinnerplugin.hide();
					alert('Something was wrong!');
				}
				$("#sp3").hide();
				//console.log('DONE');
			});
		}else{
			//spinnerplugin.hide();
			alert('Password required');
		}
		//spinnerplugin.hide();
}

var edadPaciente;
var perCef = 0;

function makeDesarrollo(){
	edadPaciente = $("#age9").val();
	perCef = $("#per9").val();

	console.log('Edad del man === ' + edadPaciente);

	if (edadPaciente === ''){
		alert('Age required');
	}else{
		if (edadPaciente < 2){
			alert('So young');
		} else {
			if (edadPaciente >= 2 && edadPaciente <4){
				$.mobile.changePage('#Qdesarrollo2-4','slide');
			}else{
				if (edadPaciente >= 4 && edadPaciente <6){
					$.mobile.changePage('#Qdesarrollo4-6','slide');
				}else{
					if (edadPaciente >= 6 && edadPaciente <9){
						$.mobile.changePage('#Qdesarrollo6-9','slide');
					}else{
						if (edadPaciente >= 9 && edadPaciente <12){
							$.mobile.changePage('#Qdesarrollo9-12','slide');
						}else{
							if (edadPaciente >= 12 && edadPaciente <15){
								$.mobile.changePage('#Qdesarrollo12-15','slide');
							}else{
								if (edadPaciente >= 15 && edadPaciente <18){
									$.mobile.changePage('#Qdesarrollo15-18','slide');
								}else{
									if (edadPaciente >= 18 && edadPaciente <24){
										$.mobile.changePage('#Qdesarrollo18-24','slide');
									}else{
										if (edadPaciente >= 24 && edadPaciente < 30){
											$.mobile.changePage('#Qdesarrollo2-2-6','slide');
										}else{
											if (edadPaciente >= 30 && edadPaciente < 36){
												$.mobile.changePage('#Qdesarrollo2-6-3','slide');
											}else{
												if (edadPaciente >= 36 && edadPaciente < 42){
													$.mobile.changePage('#Qdesarrollo3-3-6','slide');
												}else{
													if (edadPaciente >= 42 && edadPaciente < 48){
														$.mobile.changePage('#Qdesarrollo3-6-4','slide');
													}else{
														if (edadPaciente >= 48 && edadPaciente < 54){
															$.mobile.changePage('#Qdesarrollo4-4-6','slide');
														}else{
															if (edadPaciente >= 54 && edadPaciente < 60){
																$.mobile.changePage('#Qdesarrollo4-6-5','slide');
															}else{
																if (edadPaciente >= 60 && edadPaciente < 66){
																	$.mobile.changePage('#Qdesarrollo5-5-6','slide');
																}else{
																	if (edadPaciente >= 66 && edadPaciente < 72){
																		$.mobile.changePage('#Qdesarrollo5-6-6','slide');
																	}else{
																		
																	}
																}	
															}	
														}	
													}	
												}	
											}	
										}
									}	
								}	
							}
						}	
					}	
				}
			}
		}
	}
}

function makeDes2To4(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-a").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-b").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-c").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){

		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
				if (countNo >= 1){
					addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento');
				}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}

}

function desempateDesFeno(){
	if ($("#select-choice-add").val()==='val1'){
		addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento');
	}else{
		//mirar tabla
		//si esta por arriba de la linea de arriba y por abajo de la linea de abajo then lo anterior
		// else (Riesgo de problema en el desarrollo)
		//pedir genero, 
		var ageDes = $("#age9").val();
		var perDes = $("#per9").val();
		var sexDes = $("#select-choice-sexoD").val();
		if (sexDes === 'val1'){
			//MasculinoRiesgo de problema en e

		}else{
			//Femenino
		}
		addDesarrollo('Riesgo de problema en el desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 30 dias para seguimiento');
	}
}

function desempateDes(){
	if ($("#select-choice-add").val()==='val1'){
		addDesarrollo('Desarrollo normal con factores de riesgo. \n Se recomienda programa una cita con un pediatra o neuropediatra en los proximos 30 dias para seguimiento.');
	}else{
		addDesarrollo('Desarrollo normal. \n Felicitaciones, su hijo se esta desarrollando correctamente. Recuerde programa consulta con un pediatra o neuropediatra en los proximos 60 dias para seguimiento');
	}
}

function makeDes4To6(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-d").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-e").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-f").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-g").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo2-4','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes6To9(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-h").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-i").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-j").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-k").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo4-6','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes9To12(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-l").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-m").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-n").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-o").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo6-9','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes12To15(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-p").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-q").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-r").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-s").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo9-12','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes15To18(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-t").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-u").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-v").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-w").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo12-15','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes18To24(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-x").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-y").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-z").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-aa").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo15-18','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes24To30(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-bb").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-cc").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-dd").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ee").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo18-24','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes30To36(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-ff").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-gg").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-hh").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ii").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo2-2-6','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes36To42(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-jj").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-kk").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ll").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-mm").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo2-6-3','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes42To48(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-nn").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-oo").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-pp").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-qq").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo3-3-6','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes48To54(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-rr").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ss").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-tt").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-vv").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo3-6-4','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes54To60(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-ww").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-xx").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-yy").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-zz").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo4-4-6','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes60To66(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-aaa").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-bbb").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ccc").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ddd").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo4-6-5','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

function makeDes66To72(){
	//console.log();
	var countNo = 0;
	var countSi = 0;
	if ($("#select-choice-eee").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-fff").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-ggg").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}
	if ($("#select-choice-hhh").val()==='val1'){
		countSi = countSi + 1;
	}else{
		countNo = countNo + 1;
	}

	console.log('Si == ' + countSi);
	console.log('No == ' + countNo);

	if (isBack === 0){
		if (countSi === 4){
			$.mobile.changePage('#desAdd','slide');
		}else {
			if (countNo >= 1){
				isBack = 1;
				$.mobile.changePage('#Qdesarrollo5-5-6','slide');
			}
		}
	}else{
		isBack = 0;
		if (countNo >= 1){
			addDesarrollo('Probable retraso del desarrollo. \n Se recomienda programar una cita con un pediatra o neuropediatra en los proximos 7 dias para seguimiento.');
		}else{
			$.mobile.changePage('#desFeno','slide');
		}
	}
}

var isBack = 0;
var diagCrecimiento;
var diagnostoicoCrecimiento;

function calcularCrecimiento(){
	var imcCrec = $("#imc").val();

	diagnostoicoCrecimiento = '';

	if (imcCrec < 18.5 ){
		diagnostoicoCrecimiento = 'Bajo peso, ';
		if ($("#select-choice-sexoC").val()==='val1'){
			calcularCrecimientoMasculino();
		}else{
			calcularCrecimientoFemenino();
		}
	}else{
		if (imcCrec >= 18.5 && imcCrec < 25 ){
			diagnostoicoCrecimiento = 'Normal, ';
			if ($("#select-choice-sexoC").val()==='val1'){
				calcularCrecimientoMasculino();
			}else{
				calcularCrecimientoFemenino();
			}
		}else{
			if (imcCrec >= 25 && imcCrec < 30){
				diagnostoicoCrecimiento = 'Sobrepeso; ';
			}else{
				if (imcCrec >= 30 && imcCrec < 35){
					diagnostoicoCrecimiento = 'Obesidad G1; ';
				}else{
					if (imcCrec >= 35 && imcCrec < 40){
						diagnostoicoCrecimiento = 'Obesidad G2; ';
					}else{
						if (imcCrec > 40 ){
							diagnostoicoCrecimiento = 'Obesidad G3; ';
						}
					}
				}
			}
		}
	}


	
}

function calcularCrecimientoFemenino(){
	var edaddd =  $("#email8").val();
	var pesooo =  $("#address8").val();
	var estaturaaa =  $("#tur8").val();
	
	var y1, y2, y3, y4, y5;

	//PESO - EDAD
		MetodoInterNewton(edaddd,2,7.7,6,10.7,12,13.1,14,13.9,60,29.9);
		yg1 = y;

		MetodoInterNewton(edaddd,2,7.7,6,9.3,12,11.5,14,12,60,25);
		yg2 = y;

		MetodoInterNewton(edaddd,2,5,6,7.3,12,9,14,9.5,60,18.3);
		yg3 = y;

		MetodoInterNewton(edaddd,2,4,6,5.8,12,7,14,7.5,60,13.8);
		yg4 = y;

		MetodoInterNewton(edaddd,2,3.5,6,5,12,6.3,14,6.5,60,12);
		yg5 = y;

		var dif1, dif2, dif3, dif4, dif5;

		console.log('peso == ' + pesooo);
		console.log('yg1 == ' + yg1);
		console.log('yg2 == ' + yg2);
		console.log('yg3 == ' + yg3);
		console.log('yg4 == ' + yg4);
		console.log('yg5 == ' + yg5);

		dif1 = pesooo - yg1;
		dif2 = pesooo - yg2;
		dif3 = pesooo - yg3;
		dif4 = pesooo - yg4;
		dif5 = pesooo - yg5;

		console.log('Dif 1 == ' + dif1);
		console.log('Dif 2 == ' + dif2);
		console.log('Dif 3 == ' + dif3);
		console.log('Dif 4 == ' + dif4);
		console.log('Dif 5 == ' + dif5);

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso adecuado para la edad; ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo peso para su edad); ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso bajo para la edad o desnutricion global; ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion global severa; ';
						}
					}	
				}
			}	
		}

	//ESTATURA - EDAD
		MetodoInterNewton(edaddd,2,63,6,73,12,82,14,84,60,124);
		yg1 = y;

		MetodoInterNewton(edaddd,2,61,6,70,12,79,14,82,60,119);
		yg2 = y;

		MetodoInterNewton(edaddd,2,57,6,66,12,75,14,76,60,109);
		yg3 = y;

		MetodoInterNewton(edaddd,2,53,6,61,12,69,14,71,60,100);
		yg4 = y;

		MetodoInterNewton(edaddd,2,51,6,59,12,66,14,68,60,95);
		yg5 = y;


		dif1 = estaturaaa - yg1;
		dif2 = estaturaaa - yg2;
		dif3 = estaturaaa - yg3;
		dif4 = estaturaaa - yg4;
		dif5 = estaturaaa - yg5;

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' talla adecuada para la edad; ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo talla para la edad); ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' retraso de crecimiento o desnutricion cronica; ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion cronica severa; ';
						}
					}	
				}
			}	
		}

	//PESO - ESTATURA (2 - 5 años)
	if (edaddd >24 && edaddd <= 60){
		MetodoInterNewton(estaturaaa,65,9.7,80,13.4,90,17,100,10,120,31);
		yg1 = y;

		MetodoInterNewton(estaturaaa,65,8.9,80,12.1,90,15,100,18,120,28);
		yg2 = y;

		MetodoInterNewton(estaturaaa,65,7.3,80,10,90,12.5,100,14,120,12.9);
		yg3 = y;

		MetodoInterNewton(estaturaaa,65,6,80,8.5,90,10.5,100,12.5,120,18.9);
		yg4 = y;

		MetodoInterNewton(estaturaaa,65,5.9,80,8,90,9.8,100,11.5,120,17.3);
		yg5 = y;

		var dif1, dif2, dif3, dif4, dif5;

		dif1 = pesooo - yg1;
		dif2 = pesooo - yg2;
		dif3 = pesooo - yg3;
		dif4 = pesooo - yg4;
		dif5 = pesooo - yg5;

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso adecuada para la talla; ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo peso para la talla); ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso bajo para la talla o desnutricion aguda; ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion aguda severa; ';
						}
					}	
				}
			}	
		}
	}

	//PESO - ESTATURA (0 - 2 años)
	if (edaddd >=0 && edaddd <= 24){
		MetodoInterNewton(estaturaaa,45,3.4,80,13.4,90,17,100,10,120,24.8);
		yg1 = y;

		MetodoInterNewton(estaturaaa,45,3,80,12.1,90,15,100,18,120,22.5);
		yg2 = y;

		MetodoInterNewton(estaturaaa,45,2.5,80,10,90,12.5,100,15,120,18.4);
		yg3 = y;

		MetodoInterNewton(estaturaaa,45,2.1,80,8.5,90,10.5,100,12.5,120,15.3);
		yg4 = y;

		MetodoInterNewton(estaturaaa,45,1.9,80,7.6,90,9.8,100,11.5,120,14);
		yg5 = y;

		var dif1, dif2, dif3, dif4, dif5;

		dif1 = pesooo - yg1;
		dif2 = pesooo - yg2;
		dif3 = pesooo - yg3;
		dif4 = pesooo - yg4;
		dif5 = pesooo - yg5;

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso adecuada para la talla; ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo peso para la talla); ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso bajo para la talla o desnutricion aguda; ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion aguda severa; ';
						}
					}	
				}
			}	
		}
	}

	
}

function calcularCrecimientoMasculino(){
	var edaddd =  $("#email8").val();
	var pesooo =  $("#address8").val();
	var estaturaaa =  $("#tur8").val();
	
	var y1, y2, y3, y4, y5;

	//PESO - EDAD
		MetodoInterNewton(edaddd,2,8.1,6,11,12,13.2,14,14,60,27.9);
		yg1 = y;

		MetodoInterNewton(edaddd,2,7,6,10,12,12,14,12.7,60,24);
		yg2 = y;

		MetodoInterNewton(edaddd,2,5.5,6,8,12,9.8,14,10,60,18.1);
		yg3 = y;

		MetodoInterNewton(edaddd,2,4.3,6,6.4,12,7.9,14,8,60,14);
		yg4 = y;

		MetodoInterNewton(edaddd,2,3.8,6,5.6,12,7,14,7.2,60,12.2);
		yg5 = y;

		var dif1, dif2, dif3, dif4, dif5;

		console.log('peso == ' + pesooo);
		console.log('yg1 == ' + yg1);
		console.log('yg2 == ' + yg2);
		console.log('yg3 == ' + yg3);
		console.log('yg4 == ' + yg4);
		console.log('yg5 == ' + yg5);

		dif1 = pesooo - yg1;
		dif2 = pesooo - yg2;
		dif3 = pesooo - yg3;
		dif4 = pesooo - yg4;
		dif5 = pesooo - yg5;

		console.log('Dif 1 == ' + dif1);
		console.log('Dif 2 == ' + dif2);
		console.log('Dif 3 == ' + dif3);
		console.log('Dif 4 == ' + dif4);
		console.log('Dif 5 == ' + dif5);

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso adecuado para la edad, ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo peso para su edad), ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso bajo para la edad o desnutricion global, ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion global severa, ';
						}
					}	
				}
			}	
		}

	//ESTATURA - EDAD
		MetodoInterNewton(edaddd,2,64,6,74,12,83,14,86,60,124);
		yg1 = y;

		MetodoInterNewton(edaddd,2,62,6,72,12,80,14,83,60,119);
		yg2 = y;

		MetodoInterNewton(edaddd,2,58,6,68,12,76,14,78,60,110);
		yg3 = y;

		MetodoInterNewton(edaddd,2,54,6,63,12,71,14,73,60,101);
		yg4 = y;

		MetodoInterNewton(edaddd,2,52,6,61,12,69,14,71,60,96);
		yg5 = y;


		dif1 = estaturaaa - yg1;
		dif2 = estaturaaa - yg2;
		dif3 = estaturaaa - yg3;
		dif4 = estaturaaa - yg4;
		dif5 = estaturaaa - yg5;

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' talla adecuada para la edad, ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo talla para la edad), ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' retraso de crecimiento o desnutricion cronica, ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion cronica severa, ';
						}
					}	
				}
			}	
		}

	//PESO - ESTATURA (2 - 5 años)
	if (edaddd >24 && edaddd <= 60){
		MetodoInterNewton(estaturaaa,65,9.6,80,13.7,90,16.6,100,19.9,120,31);
		yg1 = y;

		MetodoInterNewton(estaturaaa,65,8.9,80,12.5,90,15.2,100,18.2,120,27.1);
		yg2 = y;

		MetodoInterNewton(estaturaaa,65,7.5,80,10.5,90,12.9,100,15.4,120,22.4);
		yg3 = y;

		MetodoInterNewton(estaturaaa,65,6.4,80,9,90,11,100,13,120,18.5);
		yg4 = y;

		MetodoInterNewton(estaturaaa,65,6,80,8.4,90,10.3,100,12.1,120,17);
		yg5 = y;

		var dif1, dif2, dif3, dif4, dif5;

		dif1 = pesooo - yg1;
		dif2 = pesooo - yg2;
		dif3 = pesooo - yg3;
		dif4 = pesooo - yg4;
		dif5 = pesooo - yg5;

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso adecuada para la talla, ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo peso para la talla), ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso bajo para la talla o desnutricion aguda, ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion aguda severa, ';
						}
					}	
				}
			}	
		}
	}

	//PESO - ESTATURA (0 - 2 años)
	if (edaddd >=0 && edaddd <= 24){
		MetodoInterNewton(estaturaaa,45,3.4,55,6,65,9.4,75,12.4,110,24);
		yg1 = y;

		MetodoInterNewton(estaturaaa,45,3,55,5.5,65,8.6,75,11.3,110,21.9);
		yg2 = y;

		MetodoInterNewton(estaturaaa,45,2.5,55,4.5,65,7.3,75,9.5,110,18.3);
		yg3 = y;

		MetodoInterNewton(estaturaaa,45,2,55,3.8,65,6.2,75,8.1,110,15.5);
		yg4 = y;

		MetodoInterNewton(estaturaaa,45,1.8,55,3.5,65,5.8,75,7.5,110,14.2);
		yg5 = y;

		var dif1, dif2, dif3, dif4, dif5;

		dif1 = pesooo - yg1;
		dif2 = pesooo - yg2;
		dif3 = pesooo - yg3;
		dif4 = pesooo - yg4;
		dif5 = pesooo - yg5;

		/*dif1 = Math.abs(dif1);
		dif2 = Math.abs(dif2);
		dif3 = Math.abs(dif3);
		dif4 = Math.abs(dif4);
		dif5 = Math.abs(dif5);*/

		// Positivo por encima, negativo abajo

		if (dif1 >= 0){
			//diagnostoicoCrecimiento = 'Tiene sobre peso';
		}else{
			if (dif2 >= 0){
				//diagnostoicoCrecimiento = 'Tiene sobre peso';
			}else{
				if (dif3 >= 0){
					diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso adecuada para la talla, ';
				}else{
					if (dif4 >= 0){
						diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' a riesgo de desnutricion (con bajo peso para la talla), ';
					}else{
						if (dif5 >= 0){
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' peso bajo para la talla o desnutricion aguda, ';
						}else{
							diagnostoicoCrecimiento = diagnostoicoCrecimiento + ' desnutricion aguda severa, ';
						}
					}	
				}
			}	
		}
	}

	
}

function addCrecimiento(){
	calcularCrecimiento();
	//spinnerplugin.show();
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '17', data: $('#formNewCrec').serialize(), email: emailLog, diagnostico: diagnostoicoCrecimiento})
			.done(function(data) {
				console.log(data);
				var convertidoAJson = JSON.parse(data);
				var resultado = convertidoAJson['resultado'];
				//console.log(nombre);
				//console.log(apellido);
				//console.log(resultado);
				if(resultado === '1'){
					$("#address8").val("");
					$("#tur8").val("");
					$("#email8").val("");
					$("#pass8").val("");
					$("#imc").val("");
					//spinnerplugin.hide();
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Gracias por escogernos! Tu diagnostico es: " + diagnostoicoCrecimiento);
				}else{
					//spinnerplugin.hide();
					alert('Something was wrong!');
				}
				console.log('DONE');
			});
			//spinnerplugin.hide();
}

function addDesarrollo(diag){
	//spinnerplugin.show();
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '18', data: $('#formNewDes').serialize(), email: emailLog, diagnostico: diag})
			.done(function(data) {
				console.log(data);
				var convertidoAJson = JSON.parse(data);
				var resultado = convertidoAJson['resultado'];
				//console.log(nombre);
				//console.log(apellido);
				//console.log(resultado);
				if(resultado === '1'){
					$("#age9").val("");
					$("#per9").val("");
					getListHistorialCrecimientoPaciente();
					//spinnerplugin.hide();
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Gracias por escogernos! Tu diagnostico es: " + diag);
				}else{
					//spinnerplugin.hide();
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
			//spinnerplugin.hide();
}

function getPaciente(){
	//spinnerplugin.show();
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '3', email: emailLog})
			.done(function(data) {
				//console.log('qweqweqwe   '+emailLog);
				var convertidoAJson = JSON.parse(data);
				var nombre = convertidoAJson['nombre'];
				var apellido = convertidoAJson['apellido'];
				emailLog = convertidoAJson['email'];
				var resultado = convertidoAJson['resultado'];
				$("#address3").val(nombre);
				$("#tur3").val(apellido);
				$("#email3").val(emailLog);
				//console.log(nombre);
				//console.log(apellido);
				//console.log(resultado);
				if(resultado === '1'){
					$("#address3").val(nombre);
					$("#tur3").val(apellido);
					$("#email3").val(emailLog);
					$("#pass3").val("");
					//spinnerplugin.hide();
				}else{
					//spinnerplugin.hide();
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
			//spinnerplugin.hide();
}

function calculoIMC(){
    var peso = $("#address8").val();
    var estatura = $("#tur8").val();
    if (peso !=='' && estatura !==''){
        estatura = estatura / 100;
        var imc = peso / (estatura * estatura);
        $("#imc").val(imc);
    }else{
        $("#imc").val("");
    }

}

function updatePaciente(){
	var newPass = $("#pass3").val();
	var newName = $("#address3").val();
	var newLastName = $("#tur3").val();
	var newEmail = $("#email3").val();
	$("#sp5").show();
	console.log(newName);
	console.log(newPass);
	if (newPass !== ''){
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '10',oldemail:emailLog,nombre:newName,apellido:newLastName,email:newEmail,password:newPass,data: $('#formProf').serialize()})
			.done(function(data) {
				console.log(data);
				// var convertidoAJson = JSON.parse(data);
				// var resultado = convertidoAJson['resultado'];
				// if(resultado === '1'){
				 	emailLog = $("#email3").val();
				 	$("#address3").val('');
				 	$("#tur3").val('');
				 	$("#email3").val('');
				 	$("#pass3").val('');
					$.mobile.changePage('#well','slide');
					$("#sp5").hide();
					$("#welHead").text("Gracias por actualizar sus datos");
					//console.log('update'+emailLog);
				// }else{
				// 	alert('Something was wrong!');
				// }
				//console.log('DONE');
			});
		}else{
			alert('Password required');
		}
}

function addDoctor(){
	//spinnerplugin.show();
	var emailDoctor = $( "#myselect option:selected" ).text();
	$("#sp6").show();
	console.log(emailDoctor);
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '19', email: emailLog, emaild: emailDoctor})
		.done(function(data) {
			//rows = JSON.parse(data);
			console.log(data);
			$.mobile.changePage('#diagnostics','slide');
			$("#sp6").hide();
		});
		//spinnerplugin.hide();
}

function getListDoctores(){
	//spinnerplugin.show();
	$('#myselect').remove();
	$("#sp6").show();
	var $ul = $('<select id="myselect" data-theme="b" data-native-menu="true" class="wap"></select>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '5'})
			.done(function(data) {
				rows = JSON.parse(data);
				console.log(rows);
				$.each(rows, function(index, row) {
			    	getList(row, $ul);
			    });
			    $ul.appendTo($("#evts"));
			    $("#sp6").hide();
			//console.log('DONEEEEEEEEEEEEE');
			});
			//spinnerplugin.hide();
}

function getList(item, $list) {

    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	//console.log(item);
        if (item.nombre) {
        	var $li = $('<option />');
            $li.append($('<option value="'+item.email+'">' + item.email + '</option>'));
        }
        if (item.child && item.child.length) {
            var $sublist = $("<select/>");
            getList(item.child, $sublist)
            $li.append($sublist);
        }
        $list.append($li)
    }
}

function getListVacunas(){
	//console.log('asdasdasdasdasdasdasdasd');
	$("#sp2").show();
	$('#plo').remove();
	var $ul = $('<table id="plo" border="1"> <tr><td><strong> Age </strong></td><td><strong> Vaccine </strong></td><td><strong> Dose </strong> <td><strong> Next date </strong> </td></tr></table>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '9', email: emailLog})
			.done(function(data) {
				console.log("Hola");
				rows = JSON.parse(data);
				$.each(rows, function(index, row) {
			    	getListVacc(row, $ul);
			    	console.log(getListVacc);
			    });
			    $ul.appendTo($("#vacAll"));
			    $("#sp2").hide();
			//console.log('DONEEEEEEEEEEEEE');
			});
}
function getListVacc(item, $list) {
	console.log("Entro");
    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	console.log(item);
        if (item.edad_paciente) {
        	var $li = $('<tr />');
            $li.append($('<td > ' + item.edad_paciente + ' </td>'));
            $li.append($('<td > ' + item.protege + ' </td>'));
            $li.append($('<td > ' + item.dosis + ' </td>'));
         // $li.append($('<td > ' + item.enfermedad + ' </td>'));
            $li.append($('<td > ' + item.fecha_proxima_vacuna + ' </td>'));
        }
        if (item.child && item.child.length) {
            var $sublist = $("<tr/>");
            getList(item.child, $sublist)
            $li.append($sublist);
        }
        $list.append($li)
    }
}


function getListVacunasAll(){
	console.log('allllllllllllll');
	$('#plo2').remove();
	$("#sp4").show();
	var $ul = $('<table id="plo2" border="1"> <tr><td><strong> Age </strong></td><td><strong> Vaccine </strong></td><td><strong> Dose </strong> <td><strong> Action </strong> </td></tr></table>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '9', email: 'admin'})
			.done(function(data) {
				console.log("Hola");
				rows = JSON.parse(data);
				$.each(rows, function(index, row) {
			    	getListVaccAll(row, $ul);
			    	console.log(getListVacc);
			    });
			    $ul.appendTo($("#vacAll2"));
			//console.log('DONEEEEEEEEEEEEE');
				$("#sp4").hide();
			});
}

function getListVaccAll(item, $list) {
	console.log("Entro");
    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	console.log(item);
        if (item.edad_paciente) {
        	var $li = $('<tr />');
            $li.append($('<td > ' + item.edad_paciente + ' </td>'));
            $li.append($('<td > ' + item.protege + ' </td>'));
            $li.append($('<td > ' + item.dosis + ' </td>'));
         // $li.append($('<td > ' + item.enfermedad + ' </td>'));
         // $li.append($('<td > ' + item.fecha_proxima_vacuna + ' </td>'));
         	$li.append($('<td > <a onclick="addVAccToPaciente(' + item.codigo +')" class="btnAdd" >Add</a> </td>'));
        }
        if (item.child && item.child.length) {
            var $sublist = $("<tr/>");
            getList(item.child, $sublist)
            $li.append($sublist);
        }
        $list.append($li)
    }
}

function addVAccToPaciente(cod){
	console.log('Codigo de la vacuna === ' + cod);
		$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '20', codigo_vh: cod, email: emailLog})
			.done(function(data) {
				console.log(data);
				var convertidoAJson = JSON.parse(data);
				var resultado = convertidoAJson['resultado'];
				if(resultado === '1'){
					alert('Done!');
				}else{
					alert('Something was wrong!');
				}
				
			});

}


function getListHistorialDesarrolloPaciente(){
	//spinnerplugin.show();
	$("#sp8").show();
	$('#asdf').remove();
	var $ul = $('<ul id="asdf" class="asdfstyle"></ul>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '8', email: emailLog})
			.done(function(data) {
				console.log(data);
				rows = JSON.parse(data);
				$.each(rows, function(index, row) {
			    	getListHisDev(row, $ul);
			    });
			    $ul.appendTo($("#evtsD"));
			    $("#sp8").hide();
			console.log('DONEEEEEEEEEEEEE');
			});
			//spinnerplugin.hide();
}

function getListHistorialCrecimientoPaciente(){
	//spinnerplugin.show();
    $('#qweaz').remove();
    $("#sp7").show();
	var $ul = $('<ul id="qweaz" class="asdfstyle"></ul>');
	console.log('wqeqweqweqwe');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '7', email: emailLog})
			.done(function(data) {
				rows = JSON.parse(data);
				console.log(data)
				$.each(rows, function(index, row) {
			    	getListHisCre(row, $ul);
			    });
			    $ul.appendTo($("#evtsC"));
			    $("#sp7").hide();
			//console.log('DONEEEEEEEEEEEEE');
			});
			//spinnerplugin.hide();
}

function getListHisCre(item, $list) {

    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	//console.log(item);
        if (item.fecha) {
        	var $li = $('<li />');
        	//console.log(item.fecha);
        	var fec = new Date(item.fecha);
        	var mon = fec.getMonth()+1;
        	
        	var complete = fec.getFullYear()+'-'+mon+'-'+fec.getDate();
        	var ye = fec.getFullYear();
        	var da = fec.getDate()+1;
        	//console.log(ye);
        	//console.log(mon);
        	//console.log(da);

            $li.append($('<a class="astyle" href="#detalleCrecimiento" onclick="getDetCrecimientoPaciente('+item.codigo+','+doscaracteres(da)+','+doscaracteres(mon)+')">'+ item.fecha + '</a>'));
        }
        if (item.child && item.child.length) {
            var $sublist = $("<ul/>");
            getList(item.child, $sublist);
            $li.append($sublist);
        }
        $list.append($li);
    }
}

function doscaracteres(numero)
{
    if (String(numero).length == 1)
        return "0" + numero;
    return numero;
}

function getListHisDev(item, $list) {

    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	//console.log(item);
        if (item.codigo) {
        	var $li = $('<li />');
        	//console.log(item);
        	var fec = new Date(item.fecha);
        	var mon = fec.getMonth()+1;
        	
        	var complete = fec.getFullYear()+'-'+mon+'-'+fec.getDate();
        	var ye = fec.getFullYear();
        	var da = fec.getDate()+1;
        	//console.log(ye);
        	//console.log(mon);
        	//console.log(da);

            $li.append($('<a class="astyle" href="#detalleDesarrollo" onclick="getDetDesarrolloPaciente('+item.codigo+','+doscaracteres(da)+','+doscaracteres(mon)+')">'+ item.fecha + '</a>'));
        }
        if (item.child && item.child.length) {
            var $sublist = $("<ul/>");
            getList(item.child, $sublist);
            $li.append($sublist);
        }
        $list.append($li);
    }
}

function getDetDesarrolloPaciente(ye, mon, da){
	//spinnerplugin.show();
	var fechaSe = ye+'-'+doscaracteres(da)+'-'+doscaracteres(mon);
	console.log(ye);
	var $ul = $('<ul ></ul>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '12', email: emailLog, codigo: ye})
			.done(function(data) {
				var hacer = 0;
				//console.log(data);
				rows = JSON.parse(data);
				$.each(rows, function(index, row) {
					console.log(index);
					if (hacer === 0){
						console.log(row);
				    	$("#aa").val(row.diagnostico);
						$("#bb").val(row.edad);
						$("#cc").val(row.perimetro_cefalico);
					}
					hacer += 1;
			    });
				//console.log(data)
				
			//console.log('DONEEEEEEEEEEEEE');
			});
			//spinnerplugin.hide();
}

function getDetCrecimientoPaciente(ye, mon, da){
	//spinnerplugin.show();
	var fechaSe = ye+'-'+doscaracteres(da)+'-'+doscaracteres(mon);
	console.log(ye);
	var $ul = $('<ul ></ul>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '11', email: emailLog, codigo: ye})
			.done(function(data) {
				var hacer = 1;
				console.log(data);
				rows = JSON.parse(data);
				$.each(rows, function(index, row) {
					console.log(index);
					if (hacer > 0){
						hacer = 0;
						console.log(row);
				    	$("#a").val(row.diagnostico);
						$("#b").val(row.edad);
						$("#c").val(row.imc);
						$("#d").val(row.perimetro_cefalico);
						$("#e").val(row.peso);
						$("#f").val(row.talla);
					}
			    });
				//console.log(data)
				
			//console.log('DONEEEEEEEEEEEEE');
			});
			//spinnerplugin.hide();
}

function showDetHisCre(item, $list) {

    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	//console.log(item);
        if (item.fecha) {
        	var $li = $('<li />');
            $li.append($('<p > ' + item.fecha + ' </p>'));
            $li.append($('<p > ' + item.diagnostico + ' </p>'));
        }
        if (item.child && item.child.length) {
            var $sublist = $("<ul/>");
            getList(item.child, $sublist)
            $li.append($sublist);
        }
        $list.append($li)
    }
}




function dir(){
	return paDonde;
}