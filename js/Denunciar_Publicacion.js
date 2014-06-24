// JavaScript Document
        // Denuncio Publicaciones - Variables declaradas en el detalle de la publicación.
        // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 


    
$("#boton_denunciar_publicacion").click(function(){

    obtidname();
});

function obtidname (){
	//console.log(nombrePublicacion);
            $("#CAT_Custom_491251").val(nombrePublicacion);
            $("#CAT_Custom_491252").val(idPublicacion);
}