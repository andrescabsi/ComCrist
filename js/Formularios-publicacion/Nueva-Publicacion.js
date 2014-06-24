// Ruta: /js/Formularios-publicacion/Nueva-Publicacion.js

$(document).ready(function() {
    /* Funciones */
    eliminarCampos();
    eliminarSubcategorias();
    SeleccionarSubcategorias();
    AutorExpo();
    AnuncianteOID_Func();
    
});
    

function AnuncianteOID_Func(){
	
    var AnunOIDCode = ID_UsuarioPublicacion;
    $("#CAT_Custom_5").val(AnunOIDCode);
    
}





function AutorExpo(){

    var Expo_Pub = exposicionPublicacioncod;
    
    /* Expo */
    if (Expo_Pub == "Baja"){
        
        $("#ExpoBaja1").attr("selected","selected");
        
    }else if (Expo_Pub == "Media"){
        
        $("#ExpoMedia2").attr("selected","selected");
    
    }else if (Expo_Pub == "Alta"){
    
        $("#ExpoAlta3").attr("selected","selected");
        
    }else{
    
         $("#ExpoBaja1").attr("selected","selected");
    
    }
    
   

    
}



function eliminarSubcategorias(){

    //Ver index en la consola: console.log( "Index: " + $( "#BienesRaices" ).index() );
    
    /* Eliminar subcategorias extra ********************************************************
    ****************************************************************************************/
    var $categoria = $("#CAT_Category");
    var indicador = categoria_publicacion_actual;
    var indicador_subcategoria = subcategoriaPublicacion;

    if (indicador == "BR"){

        $categoria.find("option").slice( 0, 61 ).remove();
        $categoria.find("option").slice( 98, 476 ).remove();
        
        //Subcategorias
        if (indicador_subcategoria == "Apartamento"){
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Bodega"){
            $categoria.find("option").slice( 1, 5 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Casa"){
            $categoria.find("option").slice( 1, 9 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Edificio"){
            $categoria.find("option").slice( 1, 13 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Habitación"){
            $categoria.find("option").slice( 1, 17 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Local"){
            $categoria.find("option").slice( 1, 21 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Lote"){
            $categoria.find("option").slice( 1, 25 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Otro"){
            $categoria.find("option").slice( 1, 29 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }else if (indicador_subcategoria == "Parqueadero"){
            $categoria.find("option").slice( 1, 33 ).remove();
            $categoria.find("option").slice( 5, 100 ).remove();
            
        }
        
    } else if (indicador == "VH"){

        $categoria.find("option").slice( 0, 461 ).remove();
        $categoria.find("option").slice( 8, 400 ).remove();
        
    }else if (indicador == "CV"){

        $categoria.find("option").slice( 0, 106 ).remove();
        $categoria.find("option").slice( 323, 400 ).remove();
        
        //Subcategorias
        if (indicador_subcategoria == "Accesorios"){
            $categoria.find("option").slice( 8, 200 ).remove();
            $categoria.find("option").slice( 8, 400 ).remove();
            
        }else if (indicador_subcategoria == "Accesorios para Vehículos"){
            $categoria.find("option").slice( 1, 8 ).remove();
            $categoria.find("option").slice( 12, 400 ).remove();
            
        }else if (indicador_subcategoria == "Animales y Mascotas"){
            $categoria.find("option").slice( 1, 19 ).remove();
            $categoria.find("option").slice( 10, 400 ).remove();
            
        }else if (indicador_subcategoria == "Bebés"){
            $categoria.find("option").slice( 1, 28 ).remove();
            $categoria.find("option").slice( 16, 400 ).remove();
            
        }else if (indicador_subcategoria == "Biblias"){
            $categoria.find("option").slice( 1, 43 ).remove();
            $categoria.find("option").slice( 26, 400 ).remove();
            
        }else if (indicador_subcategoria == "Cámaras y Accesorios"){
            $categoria.find("option").slice( 1, 68 ).remove();
            $categoria.find("option").slice( 9, 400 ).remove();
            
        }else if (indicador_subcategoria == "Celulares y Teléfonos"){
            $categoria.find("option").slice( 1, 76 ).remove();
            $categoria.find("option").slice( 11, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Coleccionables"){
            $categoria.find("option").slice( 1, 86 ).remove();
            $categoria.find("option").slice( 2, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Computación"){
            $categoria.find("option").slice( 1, 87 ).remove();
            $categoria.find("option").slice( 22, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Consolas y Videojuegos"){
            $categoria.find("option").slice( 1, 108 ).remove();
            $categoria.find("option").slice( 14, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Deportes y Fitness"){
            $categoria.find("option").slice( 1, 122 ).remove();
            $categoria.find("option").slice( 18, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Electrodomésticos"){
            $categoria.find("option").slice( 1, 139 ).remove();//sumar con el primero de abajo y restarle 1
            $categoria.find("option").slice( 10, 400 ).remove();//sumar espacios de la subcategoria desde el padre mas 1
                        
        }else if (indicador_subcategoria == "Electrónica, Audio y Video"){
            $categoria.find("option").slice( 1, 148 ).remove();
            $categoria.find("option").slice( 23, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Hogar y Muebles"){
            $categoria.find("option").slice( 1, 170 ).remove();
            $categoria.find("option").slice( 9, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Industrias y Oficinas"){
            $categoria.find("option").slice( 1, 178 ).remove();
            $categoria.find("option").slice( 10, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Instrumentos Musicales"){
            $categoria.find("option").slice( 1, 187 ).remove();
            $categoria.find("option").slice( 12, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Juegos y Juguetes"){
            $categoria.find("option").slice( 1, 198 ).remove();
            $categoria.find("option").slice( 9, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Libros"){
            $categoria.find("option").slice( 1, 206 ).remove();
            $categoria.find("option").slice( 19, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Música"){
            $categoria.find("option").slice( 1, 224 ).remove();
            $categoria.find("option").slice( 18, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Otras categorías"){
            $categoria.find("option").slice( 1, 241 ).remove();
            $categoria.find("option").slice( 2, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Películas"){
            $categoria.find("option").slice( 1, 242 ).remove();
            $categoria.find("option").slice( 11, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Relojes y Joyas"){
            $categoria.find("option").slice( 1, 252 ).remove();
            $categoria.find("option").slice( 14, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Ropa Femenina"){
            $categoria.find("option").slice( 1, 265 ).remove();
            $categoria.find("option").slice( 16, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Ropa Masculina"){
            $categoria.find("option").slice( 1, 280 ).remove();
            $categoria.find("option").slice( 14, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Ropa para Bebés"){
            $categoria.find("option").slice( 1, 293 ).remove();
            $categoria.find("option").slice( 14, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Ropa para Niños"){
            $categoria.find("option").slice( 1, 306 ).remove();
            $categoria.find("option").slice( 2, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Salud y Belleza"){
            $categoria.find("option").slice( 1, 307 ).remove();
            $categoria.find("option").slice( 11, 400 ).remove();
                        
        }else if (indicador_subcategoria == "Zapatos"){
            $categoria.find("option").slice( 1, 317 ).remove();
            $categoria.find("option").slice( 7, 400 ).remove();
                        
        }
        
    }else if (indicador == "EM"){

        $categoria.find("option").slice( 0, 435 ).remove();
        $categoria.find("option").slice( 13, 400 ).remove();
        
    }else if (indicador == "APP"){

        $categoria.find("option").slice( 61, 477 ).remove();

        //Subcategorias
        if (indicador_subcategoria == "Crecimiento"){
            $categoria.find("option").slice( 7, 61 ).remove();
            
        }else if (indicador_subcategoria == "Devocionales"){
            $categoria.find("option").slice( 1, 7 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Estudios Bíblicos"){
            $categoria.find("option").slice( 1, 13 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Matrimonio"){
            $categoria.find("option").slice( 1, 19 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Oración"){
            $categoria.find("option").slice( 1, 25 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Otras"){
            $categoria.find("option").slice( 1, 31 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Películas"){
            $categoria.find("option").slice( 1, 37 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Prédicas"){
            $categoria.find("option").slice( 1, 43 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Reflexiones"){
            $categoria.find("option").slice( 1, 49 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
            
        }else if (indicador_subcategoria == "Aplicaciones de Videos"){
            $categoria.find("option").slice( 1, 55 ).remove();
            $categoria.find("option").slice( 7, 60 ).remove();
        }

    }else if (indicador == "VT"){

        $categoria.find("option").slice( 0, 469 ).remove();
        $categoria.find("option").slice( 8, 400 ).remove();
        
    }else if (indicador == "SV"){

        $categoria.find("option").slice( 0, 450 ).remove();
        $categoria.find("option").slice( 11, 400 ).remove();
        
    }else if (indicador == "ES"){

        $categoria.find("option").slice( 0, 433 ).remove();
        $categoria.find("option").slice( 2, 400 ).remove();
        
    }else if (indicador == "ON"){

        $categoria.find("option").slice( 0, 448 ).remove();
        $categoria.find("option").slice( 1, 400 ).remove();
        
    }else if (indicador == "PR"){

        $categoria.find("option").slice( 0, 449 ).remove();
        $categoria.find("option").slice( 1, 400 ).remove();
        
    }else if (indicador == "CC"){

        $categoria.find("option").slice( 0, 98 ).remove();
        $categoria.find("option").slice( 8, 400 ).remove();
        
    }else if (indicador == "COC"){

        $categoria.find("option").slice( 0, 429 ).remove();
        $categoria.find("option").slice( 5, 400 ).remove();
        
    }else{
        $categoria.remove();
        $(".contenedor_formularios_publicacion").append("<br /><br /> <br /><h2 class='h2' style='color:red;'>MMMM ESTO ES VERGONZOSO, OCURRIO UN ERROR, POR FAVOR RECARGA LA PÁGINA</h2>");
    }
    
}

function SeleccionarSubcategorias(){

    /* Colocar Valor Subcategoria */
    $("#CAT_Custom_98").val(subcategoriaPublicacion);
    
    // SELECCION DE CATEGORIAS Y SUBCATEGORIAS PADRE
    $(".padre_data_pub").attr("selected","selected");
    
    $(".hijo_data_pub").click(function(){
        $(".padre_data_pub").attr("selected","selected"); 
    });
    
}



function eliminarCampos(){
        
        var indicador = categoria_publicacion_actual;
        
        if (indicador == "BR"){
        // ELIMINAR OTROS CAMPOS
            //$(".data_BienesRaices").remove();
            console.log("BienesRaices");
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(1)").attr('selected', 'selected');
            
        } else if (indicador == "VH"){
            console.log("Vehiculos");
            $(".data_BienesRaices").remove();
            //$(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(2)").attr('selected', 'selected');
            
        }else if (indicador == "CV"){
            console.log("Compra-Venta");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            //$(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(3)").attr('selected', 'selected');
            
        }else if (indicador == "EM"){
            console.log("Empleo");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            //$(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(4)").attr('selected', 'selected');
            
        }else if (indicador == "APP"){
            console.log("Aplicaciones");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            //$(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(5)").attr('selected', 'selected');
            
        }else if (indicador == "VT"){
            console.log("ViajesTurismo");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(6)").attr('selected', 'selected');
            
        }else if (indicador == "SV"){
            console.log("Servicios");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(7)").attr('selected', 'selected');
            
        }else if (indicador == "ES"){
            console.log("Emisoras");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(8)").attr('selected', 'selected');
            
        }else if (indicador == "ON"){
            console.log("Oportunidades de Negocio");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(9)").attr('selected', 'selected');
            
        }else if (indicador == "PR"){
            console.log("Periódicos y Revistas");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(10)").attr('selected', 'selected');
            
        }else if (indicador == "CC"){
            console.log("Clases y Cursos");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(11)").attr('selected', 'selected');
            
        }else if (indicador == "COC"){
            console.log("Comunidad");
            $(".data_BienesRaices").remove();
            $(".data_Vehiculos").remove();
            $(".data_CompraVenta").remove();
            $(".data_Empleo").remove();
            $(".data_Aplicaciones").remove();
        // SELECCIONAR CATEGORÍA
            $("#CAT_Custom_103 option:eq(12)").attr('selected', 'selected');
            
        }else{
            $(".contenedor_formularios_publicacion form").remove();
            $(".contenedor_formularios_publicacion").append("<br /><br /> <br /><h2 class='h2' style='color:red;'>Por favor primero completa tu información antes de poder publicar</h2>");
        }
}

