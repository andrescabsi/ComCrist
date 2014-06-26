<div class="datos_anunciante_public">
            
            <p class="datos_anunciante_public_nombre"><strong>Vendedor:</strong> {tag_name}</p>

            <h2 class="h2">Datos de contacto</h2>
            <section>
                <ul>
                    <li><strong>Ubicado en:</strong> {tag_ciudad}</li>
                    <li><strong>Dirección:</strong> {tag_direccion}</li>
                </ul>
                <ul>
                    <li><strong>Teléfono:</strong> {tag_telefono dia}</li>
                    <li><strong>Celular:</strong> {tag_celular}</li>
                </ul>
                <ul>
                    <li><strong>Web:</strong> <a href="http://{tag_pagina web (si aplica)}">{tag_pagina web (si aplica)}</a></li>
                </ul>
            </section>

            <h2 class="h2">Tiendas donde puedes encontrar este producto</h2>
            <section>
                    <ul>
                        <li><strong>Tienda:</strong> {tag_tienda nombre 1}</li>
                        <li><strong>Dirección:</strong> {tag_tienda direccion 1}</li>
                        <li><strong>Teléfono:</strong> {tag_tienda telefono 1}</li>
                    </ul>
                    <ul>
                        <li><strong>Tienda:</strong> {tag_tienda nombre 2}</li>
                        <li><strong>Dirección:</strong> {tag_tienda direccion 2}</li>
                        <li><strong>Teléfono:</strong> {tag_tienda telefono 2}</li>
                    </ul>
                    <ul>
                        <li><strong>Tienda:</strong> {tag_tienda nombre 3}</li>
                        <li><strong>Dirección:</strong> {tag_tienda direccion 3}</li>
                        <li><strong>Teléfono:</strong> {tag_tienda telefono 3}</li>
                    </ul>
                    <ul>
                        <li><strong>Tienda:</strong> {tag_tienda nombre 4}</li>
                        <li><strong>Dirección:</strong> {tag_tienda direccion 4}</li>
                        <li><strong>Teléfono:</strong> {tag_tienda telefono 4}</li>
                    </ul>
                    <ul>
                        <li><strong>Tienda:</strong> {tag_tienda nombre 5}</li>
                        <li><strong>Dirección:</strong> {tag_tienda direccion 5}</li>
                        <li><strong>Teléfono:</strong> {tag_tienda telefono 5}</li>
                    </ul>
                    <ul>
                        <li><strong>Tienda:</strong> {tag_tienda nombre 6}</li>
                        <li><strong>Dirección:</strong> {tag_tienda direccion 6}</li>
                        <li><strong>Teléfono:</strong> {tag_tienda telefono 6}</li>
                    </ul>
            </section>
            
            <h2 class="h2">Haz un pedido online</h2>
            <section>
                <h4 class="h4">¿Cómo Funciona?</h3>
                <article>
                    <h6 class="h6">1. Ingresa tus datos</h4>
                    <img class="imagen_comoFunciona-1" src="/Imagenes/Proceso/IngresatusDatos.png" alt="">
                </article>
                <article>
                    <h6 class="h6">2. Recibe en tu email las instrucciones de pago</h4>
                    <img class="imagen_comoFunciona-2" src="/Imagenes/Proceso/IntruccionesEmail.png" alt="">
                </article>
                <article>
                    <h6 class="h6">3. Paga el producto o servicio</h4>
                    <img class="imagen_comoFunciona-3" src="/Imagenes/Proceso/PagaporProducto.png" alt="">
                </article>
                <article>
                    <h6 class="h6">4. Envía el soporte de pago</h4>
                    <img class="imagen_comoFunciona-4" src="/Imagenes/Proceso/RecibeProducto.png" alt="">
                </article>
                <article>
                    <h6 class="h6">5. Recibe el producto que deseas</h4>
                    <img class="imagen_comoFunciona-5" src="/Imagenes/Proceso/SoportePago.png" alt="">
                </article>
                    <h5 style="text-align:center;">Las formas de pago, envío y tiempos de entrega de los productos o servicios dependen de cada vendedor</h5>
            </section>

            <h2 class="h2">Realiza tu pedido</h2>
            <section>
                <div id="contenedor_formulario_envio_usuario">

                    <form name="catwebformform79287" method="post" onsubmit="return checkWholeForm79287(this)" enctype="multipart/form-data" action="/Default.aspx?a=Form&amp;Email={tag_correo electronico}&amp;Subject=Estoy+interesado+en+tu+publicacion+de+Comercio+Cristiano&amp;EmailFrom={module_emailaddress}&amp;PageID=/Usuarios/Publicaciones/Confirmacion-Contacto.html">
                      <span class="req">*</span> <span style="font-size:11px;">Requerido</span>

                      <label for="FirstName">Nombre: <span class="req">*</span></label>
                      <input type="text" name="Nombre" id="FirstName" class="cat_textbox" maxlength="255" value="{module_firstname}" />

                      <label for="LastName">Apellido: <span class="req">*</span></label>
                      <input type="text" name="Apellido" id="LastName" class="cat_textbox" maxlength="255" value="{module_lastname}" />

                      <label for="EmailAddress">Correo Electrónico: <span class="req">*</span></label>
                      <input type="text" name="Correo Electrónico" id="EmailAddress" class="cat_textbox" maxlength="255" value="{module_emailaddress}" />
                      {module_ccsecurity}

                      <label for="CAT_Custom_525793">Identificación CC: <span class="req">*</span></label>
                      <input type="text" maxlength="4000" name="Identificación CC" id="CAT_Custom_525793" class="cat_textbox" value="" />

                      <label for="CAT_Custom_525803">Dirección de envío: <span class="req">*</span></label>
                      <input type="text" maxlength="4000" name="Direccion de envio" id="CAT_Custom_525803" class="cat_textbox" value="" />

                      <label for="CAT_Custom_525794">Ciudad: <span class="req">*</span></label>
                      <input type="text" maxlength="4000" name="Ciudad" id="CAT_Custom_525794" class="cat_textbox" value="" />

                      <label for="CAT_Custom_525795">Teléfono: <span class="req">*</span></label>
                      <input type="text" maxlength="4000" name="Telefono" id="CAT_Custom_525795" class="cat_textbox" value="" />

                      <label for="CAT_Custom_525796">Celular: <span class="req">*</span></label>
                      <input type="text" maxlength="4000" name="Celular" id="CAT_Custom_525796" class="cat_textbox" value="" />

                      <label for="CAT_Custom_525797">Cantidades: <span class="req">*</span></label>
                      <input type="text" maxlength="4000" name="Cantidades" id="CAT_Custom_525797" class="cat_textbox" value="" />

                      <label for="CAT_Custom_525877">Nombre Anuncio</label>
                      <input type="text" maxlength="4000" name="Nombre Anuncio" id="CAT_Custom_525877" class="cat_textbox" value="{module_pagename}" readonly>

                      <label for="CAT_Custom_525879">Enlace Publicaci&oacute;n</label>
                      <input type="text" maxlength="4000" name="Enlace Publicacion" id="CAT_Custom_525879" class="cat_textbox" value="{module_pageaddress}" readonly>

                      <label for="CAT_Custom_525798">Otros detalles: <span class="req">*</span></label>
                      <textarea placeholder="Especifica detalles como color, talla,etc" name="Otros detalles" id="CAT_Custom_525798" cols="10" rows="4" class="cat_listbox" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>

                      <button class="boton_amarillo" type="submit" id="catwebformbutton">Solicitar Pedido</button>

                      <script type="text/javascript" src="/CatalystScripts/ValidationFunctions.js"></script>
                      <script type="text/javascript">
                        //<![CDATA[
                        var submitcount79287 = 0;
                        function checkWholeForm79287(theForm){
                          var why = "";
                          if (theForm.FirstName) why += isEmpty(theForm.FirstName.value, "First Name");
                          if (theForm.LastName) why += isEmpty(theForm.LastName.value, "Last Name");
                          if (theForm.EmailAddress) why += checkEmail(theForm.EmailAddress.value);
                          if (theForm.CAT_Custom_525793) why += isEmpty(theForm.CAT_Custom_525793.value, "Identificación CC");
                          if (theForm.CAT_Custom_525803) why += isEmpty(theForm.CAT_Custom_525803.value, "Dirección de envío");
                          if (theForm.CAT_Custom_525794) why += isEmpty(theForm.CAT_Custom_525794.value, "Ciudad");
                          if (theForm.CAT_Custom_525795) why += isEmpty(theForm.CAT_Custom_525795.value, "Teléfono");
                          if (theForm.CAT_Custom_525796) why += isEmpty(theForm.CAT_Custom_525796.value, "Celular");
                          if (theForm.CAT_Custom_525797) why += isEmpty(theForm.CAT_Custom_525797.value, "Cantidades");
                          if (theForm.CAT_Custom_525798) why += isEmpty(theForm.CAT_Custom_525798.value, "Otros detalles");
                          if(why != ""){
                            alert(why);
                            return false;
                          }
                          if(submitcount79287 == 0){
                            submitcount79287++;
                            theForm.submit();
                            return false;
                          }
                          else{
                            alert("Form submission is in progress.");
                            return false;
                          }
                        }
                        //]]>
                      </script>
                    </form>

                    <!-- FORMULARIO -->
                </div>
                <div>
                    <p><strong>El realizar un pedido no te obliga a hacer el pago de la compra del producto o servicio si no te es adsequible las formas de pago y envío, tu cuenta no se verá afectada si no haces el pago del pedido.</strong></p>
                </div>
            </section>
        </div>