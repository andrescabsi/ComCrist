
<script>

$("document").ready(function(){

	if ({tag_cieec}) {
		//console.log("Verdadero SIEEC");
		$("#badge_cieec_img").show();
	};

	if ({tag_empresario biblico}) {
		//console.log("Verdadero Diezmador");
		$("#badge_diezmadorleal_img").show();
	};

});


</script>

<a id="badge_diezmadorleal_img" style="display:none;" href="/Comercio-Cristiano/Diezmador-leal.html">
	<img src="/Imagenes/Badges/DiezmadorLeal_Badge.png?Action=thumbnail&Width=130&Height=130&algorithm=fill_proportional" alt="Esta empresa hace parte de Diezmador Leal">
</a>
<a id="badge_cieec_img" style="display:none;" href="/Comercio-Cristiano/SIEEC.html">
	<img src="/Imagenes/Badges/SIEEC_Badge.png?Action=thumbnail&Width=130&Height=130&algorithm=fill_proportional" alt="Esta empresa está respaldada por SIEEC">
</a>