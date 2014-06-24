// Ruta:  /Usuarios/Mi-Cuenta/perfil-anunciante


$(document).ready(function(){
    
	validador_perfil_creado();
	eresUnaEmpresa();
    desabilitarSubmit();
    AnuncianteOID();
    petAjaxEID();
});

    

/* Validar si el perfil de anunciante fue creado.
****************************************************************/
function validador_perfil_creado(){
    
    var perfilCreadoAnunci = "<button class='boton_amarillo'><a class='enlace' href='/Usuarios/Publicaciones/nueva-publicacion.htm'>Publicar un nuevo anuncio</a></button>";
    
	if ($('#indicador_perfil_Anunci_Creado').is(':empty')){
		console.log("Mostrar");
		$("#creacion_perfil_anunciante_nuevo_titulo").show(); //Mostrar el titulo de crear perfil anunciante
		$("#creacion_perfil_anunciante_nuevo").show(); //Mostrar el formulario de crear perfil anunciante
        
        
	}else{
        
		console.log("Ocultar");
		$(".contenedor_boton_publicar").append(perfilCreadoAnunci);
        $("#el_oculto_anuncianteTrigger").show(); //Mostrar el menu de publicacion.
        $(".c2_completa_tu_perfil").hide(); //Ocultar la columna derecha.
        $(".c1_completa_tu_perfil").css("width","98%");
	}
    
}
    


/* Formulario mostrar campos si es una empresa.
****************************************************************/
function eresUnaEmpresa(){

    $("#CAT_Custom_30").click(function(){
    	$("#eresUnaEmpresa").slideToggle();
    });
    
}



/* Deshabilita envio de creación de perfil si no aceptan terminos.
****************************************************************/
function desabilitarSubmit(){
    
    /* Cuando se seleccione acepto condiciones */
    $("#CAT_Custom_28").click(function(){
        $(this).attr("disabled", "disabled");
		$("#boton_deshabilitado_container").hide();
        $("#boton_habilitado_container").show();
        $("#mensaje_aceptar_condiciones").hide();
        
    });
    
    /* Cuando hagan clic en el boton deshabilitado */
    $("#boton_deshabilitado_container").one( "click", function() {
        var msjClickInhabilitado = "<p id='mensaje_aceptar_condiciones' style='color: red;'>Debes aceptar las políticas de privacidad y los términos y condiciones</p>";
        $("#politicasCondiciones_txt").append(msjClickInhabilitado);
		
    });
}


/* Validar si existe OID y si existe copia el valor al CRM input.
****************************************************************/

function AnuncianteOID(){
    var inputCRMOIDAnunciante = $("#CAT_Custom_507078_327").val().length;
    
	if (inputCRMOIDAnunciante <= 0){
        var valorAnunciantOID = $("#Value_OID_Anunciante").html();
    	//console.log("No hay ningun anunciante OID registrado - proceder");
        $("#CAT_Custom_507078_327").val(valorAnunciantOID);
        
    }else{
    	//console.log("Ya existe un anunciante OID registrado");
    }
}


/* Obtiene el EID del Usuario de Zona segura y almacena EID y OID Anunciante.
****************************************************************/

function petAjaxEID() {

    var $form = $("#form_crm_usuario_pub"); // ID Formulario Entity ID
    var $successmessage = "EID obtenido"; // replace with your own success message in HTML format
    var $errormessage = "Error EID"; // replace with your own error message in HTML format
    
        $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: $form.serialize(), 
            success: function (msg) { 
                if (typeof msg.FormProcessV2Response == "object") {
                    var formResponse = eval(msg);
                    
                    if(msg.FormProcessV2Response.success){
                        //console.log($successmessage);
                        var elEntiD = msg.FormProcessV2Response.entityId; //Obtener variable EntID
                        
                        $("#CAT_Custom_498876_327").val(elEntiD); //Colocar variable en campo
                        //console.log(elEntiD);
                        
                        
                    }
                    else {
                        //console.log($errormessage);	
                    }
                	}},
                
            error: function (msg) {
                	//console.log($errormessage);
            	}

        });
}