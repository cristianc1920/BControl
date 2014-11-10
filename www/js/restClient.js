

localStorage.emailLog = '';
localStorage.logPc = 0;

function login(){
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '1', data: $('#formLogIn').serialize()})
			.done(function(data) {
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
					alert('Email y/o contraseña inválidos');
				}
				//console.log('DONE');
			});
}

function signUp(){
	var newPass = $("#pass2").val();
	console.log(newPass);
	if (newPass !== ''){
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '2', data: $('#formSignUp').serialize()})
			.done(function(data) {
				var convertidoAJson = JSON.parse(data);
				var nombre = convertidoAJson['nombre'];
				var apellido = convertidoAJson['apellido'];
				var resultado = convertidoAJson['resultado'];
				//console.log(nombre);
				//console.log(apellido);
				//console.log(resultado);
				if(resultado === '1'){
					$("#address2").val("");
					$("#tur2").val("");
					$("#email2").val("");
					$("#pass2").val("");
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Thanks for sign up "+ nombre + " " + apellido);
				}else{
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
		}else{
			alert('Password required');
		}
}

function addCrecimiento(){
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '17', data: $('#formNewCrec').serialize(), email: emailLog})
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
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Thanks for choosing us");
				}else{
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
}

function addDesarrollo(){
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '18', data: $('#formNewDes').serialize(), email: emailLog})
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
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Thanks for choosing us");
				}else{
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
}

function getPaciente(){
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
				}else{
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
}

function updatePaciente(){
	var newPass = $("#pass3").val();
	//console.log(newPass);
	if (newPass !== ''){
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '10', data: $('#formProf').serialize(), oldemail: emailLog})
			.done(function(data) {
				var convertidoAJson = JSON.parse(data);
				var resultado = convertidoAJson['resultado'];
				if(resultado === '1'){
					emailLog = $("#email3").val();
					$("#address3").val('');
					$("#tur3").val('');
					$("#email3").val('');
					$("#pass3").val('');
					$.mobile.changePage('#well','slide');
					$("#welHead").text("Thanks for update");
					//console.log('update'+emailLog);
				}else{
					alert('Something was wrong!');
				}
				//console.log('DONE');
			});
		}else{
			alert('Password required');
		}
}

function addDoctor(){
	var emailDoctor = $( "#myselect option:selected" ).text();
	console.log(emailDoctor);
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '19', email: emailLog, emaild: emailDoctor})
		.done(function(data) {
			//rows = JSON.parse(data);
			console.log(data);
		});
}

function getListDoctores(){
	$('#myselect').remove();
	var $ul = $('<select id="myselect" data-theme="b" data-native-menu="true" class="wap"></select>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '5'})
			.done(function(data) {
				rows = JSON.parse(data);
				console.log(rows);
				$.each(rows, function(index, row) {
			    	getList(row, $ul);
			    });
			    $ul.appendTo($("#evts"));
			//console.log('DONEEEEEEEEEEEEE');
			});
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
	$('#plo').remove();
	var $ul = $('<table id="plo" border="1"> <tr><td><strong> Age </strong></td><td><strong> Vaccine </strong></td><td><strong> Disease </strong></td><td><strong> Dose </strong> <td><strong> Next date </strong> </td></tr></table>');
	$.post('http://bcontrol.herokuapp.com/server.php', {opcion: '9', email: emailLog})
			.done(function(data) {
				//console.log(data);
				rows = JSON.parse(data);
				$.each(rows, function(index, row) {
			    	getListVacc(row, $ul);
			    });
			    $ul.appendTo($("#vacAll"));
			//console.log('DONEEEEEEEEEEEEE');
			});
}

function getListVacc(item, $list) {

    if ($.isArray(item)) {
        $.each(item, function(key, value) {
            getList(value, $list);
        });
        return;
    }

    if (item) {
    	//console.log(item);
        if (item.nombre_vacuna) {
        	var $li = $('<tr />');
            $li.append($('<td > ' + item.edad_paciente + ' </td>'));
            $li.append($('<td > ' + item.nombre_vacuna + ' </td>'));
            $li.append($('<td > ' + item.enfermedad + ' </td>'));
            $li.append($('<td > ' + item.dosis + ' </td>'));
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

function getListHistorialDesarrolloPaciente(){
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
			//console.log('DONEEEEEEEEEEEEE');
			});
}

function getListHistorialCrecimientoPaciente(){
    $('#qweaz').remove();
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
			//console.log('DONEEEEEEEEEEEEE');
			});
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
}

function getDetCrecimientoPaciente(ye, mon, da){
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