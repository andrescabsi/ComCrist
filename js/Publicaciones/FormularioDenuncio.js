
// Variables

var $formdenuncio = $('#formulario'),
	$botondenuncio = $('#boton_denunciar_publicacion');



// Eventos
$botondenuncio.click( mostrarFormularioDenuncio );

function mostrarFormularioDenuncio(){
	$formdenuncio.slideToggle();
	return false;
}