$(document).ready(function() {

    mostrar_Campos_Pubs();
    
    $(".caracteristicas_item_publicaciones p span").each(function() {
        var itemsvacios = $(this);
        if (itemsvacios.html() == '') {
            itemsvacios.addClass('hidden');
            itemsvacios.parent().remove();
        }
    });

    // Calculo Ahorro
    //************************************
    mostrar_Ahorro_precio();

    // Enlace Categoria
    //************************************
    enlace_categoriaPublicacionActual();


        
});


// Enlace categoria breadcrumbs
//************************************
function enlace_categoriaPublicacionActual(){
    var categoriaPublicacionActual = $("#categoria_Publi_enlace").html();

    if (categoriaPublicacionActual == "Aplicaciones") {
        $("#categoria_Publi_enlace").attr("href","/categoria/aplicaciones");
    }else if (categoriaPublicacionActual == "Bienes-Raices") {
        $("#categoria_Publi_enlace").attr("href","/categoria/bienes-raices");
    }else if (categoriaPublicacionActual == "Compra-Venta") {
        $("#categoria_Publi_enlace").attr("href","/categoria/compra-venta");
    }else if (categoriaPublicacionActual == "Viajes-Turismo") {
        $("#categoria_Publi_enlace").attr("href","/categoria/viajes-turismo");
    }else if (categoriaPublicacionActual == "Empleo") {
        $("#categoria_Publi_enlace").attr("href","/categoria/empleo");
    }else if (categoriaPublicacionActual == "Clases-Cursos") {
        $("#categoria_Publi_enlace").attr("href","/categoria/clases-cursos");
    }else if (categoriaPublicacionActual == "Vehiculos") {
        $("#categoria_Publi_enlace").attr("href","/categoria/vehiculos");
    }else if (categoriaPublicacionActual == "Servicios") {
        $("#categoria_Publi_enlace").attr("href","/categoria/servicios");
    }else if (categoriaPublicacionActual == "Emisoras") {
        $("#categoria_Publi_enlace").attr("href","/categoria/emisoras");
    }else if (categoriaPublicacionActual == "Periódicos y Revistas") {
        $("#categoria_Publi_enlace").attr("href","periodicos-y-revistas");
    }else if (categoriaPublicacionActual == "Comunidad") {
        $("#categoria_Publi_enlace").attr("href","/categoria/comunidad");
    }else if (categoriaPublicacionActual == "Oportunidades de Negocio") {
        $("#categoria_Publi_enlace").attr("href","/categoria/oportunidades-de-negocio");
    }else{
        $("#categoria_Publi_enlace").attr("href","/");
    }
};




// Calculo Ahorro
//************************************
function mostrar_Ahorro_precio(){

    var variablePrecioAhora = $("#variablePrecioAhora").html();
    var variablePrecioAntes = $("#variablePrecioAntes").html();
    var variablePrecioAhorro = variablePrecioAntes - variablePrecioAhora;

    //console.log(variablePrecioAhorro);
    $("#variablePrecioAhorro").html(variablePrecioAhorro);
};
    
    
function mostrar_Campos_Pubs(){
    
    // Variables Categorias
    //************************************
	var cat_co_dig = categoria_codigo;
    //console.log(cat_co_dig);
    
    
    // Variables elementos
    //************************************
    var	$elemBienesRaices = $("article[data-categoria='Bienes-Raices']");
    var	$elemVehiculos = $("article[data-categoria='Vehiculos']");
    var	$elemCompraVenta = $("article[data-categoria='Compra-Venta']");
    var	$elemEmpleo = $("article[data-categoria='Empleo']");
    var	$elemAplicaciones = $("article[data-categoria='Aplicaciones']");
    var	$elemViajesTurismo = $("article[data-categoria='Viajes-Turismo']");
    var	$elemServicios = $("article[data-categoria='Servicios']");
    var	$elemEmisoras = $("article[data-categoria='Emisoras']");
    var	$elemOportNegocio = $("article[data-categoria='Oportunidades-Negocio']");
    var	$elemPeriodicosRevistas = $("article[data-categoria='Periodicos-Revistas']");
    var	$elemClasesCursos = $("article[data-categoria='Clases-Cursos']");
    
    
		if ( cat_co_dig == "Bienes-Raices" ){
            
            $elemBienesRaices.show();

        }else if ( categoria_codigo == "Vehiculos" ){
            
            $elemVehiculos.show();
        
        }else if ( categoria_codigo == "Compra-Venta" ){
            
            $elemCompraVenta.show();
        
        }else if ( categoria_codigo == "Empleo" ){
            
            $elemEmpleo.show();
            
        }else if ( categoria_codigo == "Aplicaciones" ){
            
            $elemAplicaciones.show();
            
        }else if ( categoria_codigo == "Viajes-Turismo" ){
            
            $elemViajesTurismo.show();  
        
        }else if ( categoria_codigo == "Servicios" ){
            
            $elemServicios.show();
        
        }else if ( categoria_codigo == "Emisoras" ){
            
            $elemEmisoras.show();
            
        }else if ( categoria_codigo == "Oportunidades-Negocio" ){
            
            $elemOportNegocio.show();
            
        }else if ( categoria_codigo == "Periodicos-Revistas" ){
            
            $elemPeriodicosRevistas.show();
            
        }else if ( categoria_codigo == "Clases-Cursos" ){
            
            $elemClasesCursos.show();
            
        }else{
        
        	$elemClasesCursos.hide();
            $elemBienesRaices.hide();
            $elemVehiculos.hide();
            $elemCompraVenta.hide();
            $elemEmpleo.hide();
            $elemAplicaciones.hide();
            $elemViajesTurismo.hide(); 
            $elemServicios.hide(); 
            $elemEmisoras.hide();
            $elemOportNegocio.hide();
            $elemPeriodicosRevistas.hide();
            
        }
    
    
    
}    
    
    
    
    
//console.log(categoria_codigo + "Holaaaaaaaaaaauuuuuuuuuutttt");
    
    
/******************************************
Ocultar información detalle publicaciones webapp

- Variable que contiene la categoría de la publicación: categoriafinal

- Codigo categorías:

    data-categoria="Bienes-Raices"
    data-categoria="Vehiculos"
    data-categoria="Compra-Venta"
    data-categoria="Empleo"
    data-categoria="Aplicaciones"
    data-categoria="Viajes-Turismo"
    data-categoria="Servicios"
    data-categoria="Emisoras"
    data-categoria="Oportunidades-Negocio"
    data-categoria="Periodicos-Revistas"
    data-categoria="Clases-Cursos"
    
*********************************************/
    

    
   
	
        
     


    