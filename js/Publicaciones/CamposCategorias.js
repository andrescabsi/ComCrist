$(document).ready(function() {

    mostrar_Campos_Pubs();
    
    $(".caracteristicas_item_publicaciones p span").each(function() {
        var itemsvacios = $(this);
        if (itemsvacios.html() == '') {
            itemsvacios.addClass('hidden');
            itemsvacios.parent().remove();
        }
    });
    
    


        
});


    
    
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
    

    
   
	
        
     


    