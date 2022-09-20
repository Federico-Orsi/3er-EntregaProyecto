// Aqui traigo el Carrito que se generó en la Sección Contabilidad, utilizando LocalStorage:
let carritoRecuperado;

carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));

let sumaCarritoRecuperado = 0 ;

for (const elemento of carritoRecuperado) {
// Aqui acumulo el Valor Total de la Compra para luego mostrarlo en el detalle de Pago de las Tarjetas:  
sumaCarritoRecuperado+=elemento.cantidad*elemento.servicio.precioNetoPlan;  

}

// Validación de Formulario con Expresiones Regulares

const expresiones = {
	domicilio: /^[a-zA-ZÀ-ÿ0-9\s\_\-]{1,30}$/, // Letras, numeros, guion y guion_bajo
	ZipCode: /^[A-Z0-9]{4,8}$/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	ciudad: /^[a-zA-ZÀ-ÿ\s]{0,15}$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numeros: /^\d{4,10}$/ // 7 a 14 numeros.
}
  
  // Variables del Formulario:

  
  let inputApellido = document.getElementById("inputApellido");
  let inputNombre = document.getElementById("inputNombre");
  let formulario = document.getElementById("formulario");
  let inputDireccion = document.getElementById("direccion");
  let inputCiudad = document.getElementById("inputCity");
  let inputZipCode = document.getElementById("inputZipCode");
  let inputEmail4 = document.getElementById("inputEmail4");
  let termsAndConditions = document.getElementById("gridCheck");
  
  // Fetch (POST) Formulario: 
  
  const enviarAJsonPlaceHolder = () => {
  
  const datosIngresadosPorElUsuario = {

    Apellido: inputApellido.value,
    Nombre: inputNombre.value,
    Direccion: inputDireccion.value,
    Ciudad: inputCiudad.value,
    Email: inputEmail4.value,
    ZipCode: inputZipCode.value,
  }
  
  fetch("https://jsonplaceholder.typicode.com/posts",
  {method:"POST",
  body: JSON.stringify(datosIngresadosPorElUsuario),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }

})
 .then(response => response.json())
 .then(respuestaDatos => {
  
  console.log(respuestaDatos);

 })
}
  
  
  // Comentarios de Error debajo de los Inputs
  let comentarioErrorNombre = document.getElementById("comentarioErrorNombre");
  let comentarioErrorApellido = document.getElementById("comentarioErrorApellido");
  let comentarioErrorMail = document.getElementById("comentarioErrorMail");
  let comentarioErrorDireccion = document.getElementById("comentarioErrorDireccion");
  let comentarioErrorCiudad = document.getElementById("comentarioErrorCiudad");
  let comentarioErrorZipCode = document.getElementById("comentarioErrorZipCode");
  let errorTerminosYCondiciones = document.getElementById("errorTerminosYCondiciones");
  
  //Validación de los Términos y Condiciones:
  termsAndConditions.onclick = () => {
   
  if (termsAndConditions.checked == false) {
    
    errorTerminosYCondiciones.style.color = "red";
    errorTerminosYCondiciones.innerText = "*Es Obligatorio que Aceptes los Términos y Condiciones";

  } else {
    errorTerminosYCondiciones.innerText = "";

  }
  }
  
  let botonSubmit = document.getElementById("botonSubmit");
  botonSubmit.onmouseover = () => {

   if (termsAndConditions.checked == false) {
    errorTerminosYCondiciones.style.color = "red";
    errorTerminosYCondiciones.innerText = "*Es Obligatorio que Aceptes los Términos y Condiciones";
   } 
  }

  botonSubmit.onmouseout = () => {

   if (termsAndConditions.checked == false) {
    errorTerminosYCondiciones.style.color = "red";
    errorTerminosYCondiciones.innerText = "*";
   } 
  }

  // Eventos OnInput del Formulario:
  
  inputEmail4.oninput = () => {

    if ((expresiones.correo.test(inputEmail4.value) == false)) {
  
      inputEmail4.style.color = "red";
      comentarioErrorMail.style.color = "red";
      comentarioErrorMail.innerText = "* Este Campo es obligatorio. Debe tener formato de e-mail.";
    } else {
  
      inputEmail4.style.color = "black";
      comentarioErrorMail.innerText = "";
    }
  }
  
  
  inputApellido.oninput = () => {

  if ((expresiones.nombre.test(inputApellido.value) == false)) {

    inputApellido.style.color = "red";
    comentarioErrorApellido.style.color = "red";
    comentarioErrorApellido.innerText = "* Este Campo es obligatorio, solamente se permiten Letras y Espacios.";
  } else {

    inputApellido.style.color = "black";
    comentarioErrorApellido.innerText = "";
  }
}
  
inputNombre.oninput = () => {

  if ((expresiones.nombre.test(inputNombre.value) == false)) {

    inputNombre.style.color = "red";
    comentarioErrorNombre.style.color = "red";
    comentarioErrorNombre.innerText = "* Este Campo es obligatorio, solamente se permiten Letras y Espacios.";
  } else {

    inputNombre.style.color = "black";
    comentarioErrorNombre.innerText = "";
  }
}  
  
inputDireccion.oninput = () => {

  if ((expresiones.domicilio.test(inputDireccion.value) == false)) {

    inputDireccion.style.color = "red";
    comentarioErrorDireccion.style.color = "red";
    comentarioErrorDireccion.innerText = "* Este Campo es obligatorio, no se permite colocar puntos.";
  } else {

    inputDireccion.style.color = "black";
    comentarioErrorDireccion.innerText = "";
  }
}  

inputCiudad.oninput = () => {

  if ((expresiones.ciudad.test(inputCiudad.value) == false)) {

    inputCiudad.style.color = "red";
    comentarioErrorCiudad.style.color = "red";
    comentarioErrorCiudad.innerText = "* En este Campo solamente se permiten Letras y Espacios.";
  } else {

    inputCiudad.style.color = "black";
    comentarioErrorCiudad.style.color = "red";
    comentarioErrorCiudad.innerText = "";
  }
}  

inputZipCode.oninput = () => {

  if ((expresiones.ZipCode.test(inputZipCode.value) == false)) {

    inputZipCode.style.color = "red";
    comentarioErrorZipCode.innerText = "* Este Campo es obligatorio, solo se pueden colocar Letras Mayúsculas y Números, de 4 a 8 caracteres.";
  } else {

    inputZipCode.style.color = "black";
    comentarioErrorZipCode.style.color = "red";
    comentarioErrorZipCode.innerText = "";
  }
}  

// Contenedor de Formas de Pago y Funcion que las hace aparecer en Pantalla!!
  
  containerFormasDePago = document.getElementById("containerFormasDePago");
  
  mostrarFormasDePago = () => {

  containerFormasDePago.innerHTML = `
  
  <section id="formasDePago" class="text-center mt-5 mb-5">
          <h3 class="h3Titulo">Formas de Pago</h3>
         <article class="d-flex justify-content-around mt-5">
          
          <figure id="figureVisa" class="figure w-25">
            <img src="../img/Visa_Inc._logoSvg.svg" id="imgVisa" class="figure-img img-fluid rounded" alt="Visa">
                                               <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button id="triggerTimerVisa" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropVisa">Ver cuotas</button></figcaption>
          </figure>

          <figure id="figurePayPal" class="figure">
            <img src="../img/PayPalSvg.svg" id="imgPayPal" class="figure-img img-fluid rounded" alt="PayPal">
                                               <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button id="triggerTimerPayPal" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropPayPal">Ver cuotas</button></figcaption>
          </figure>
     
          <figure id="figureMasterCard" class="figure">
            <img src="../img/MasterCard_LogoSvg.svg" id="imgMasterCard" class="figure-img img-fluid rounded" alt="Master">
                                              <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button id="triggerTimerMasterCard" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver cuotas</button></figcaption>
          </figure>

          </article>
          </section>
  
  `;
  }
  
  
  // OnSubmit Formulario:
  
  formulario.onsubmit = (e) => {
   
    e.preventDefault(); 
   
    if ((expresiones.nombre.test(inputApellido.value)) && (expresiones.nombre.test(inputNombre.value)) && (expresiones.domicilio.test(inputDireccion.value)) && (expresiones.ciudad.test(inputCiudad.value)) && (expresiones.ZipCode.test(inputZipCode.value)) && (expresiones.correo.test(inputEmail4.value)) && (termsAndConditions.checked) ) {
      enviarAJsonPlaceHolder();
      
      Swal.fire({
        icon: 'success',
        title: 'Gracias ' + inputNombre.value + ', tus datos se enviaron correctamente.',
        text: 'Ahora podes elegir tu Forma de Pago más Conveniente.',
        
      })

      formulario.reset();

      
      // Creación de Boton para realizar Pago:
      botonPago = document.createElement("button");
      botonPago.innerText = "Ir a Pagos";
      botonPago.setAttribute("type","button");
      botonPago.className = "btn btn-primary";

      // Contenedor Botones Submit:
      divBotonesSubmit = document.getElementById("divBotonesSubmit");
      // Aqui Elimino el Botton de Submit para que solo se pueda enviar una vez!! Hay que refrescar la pagina para que aparezca nuevamente!!
      divBotonesSubmit.innerHTML = `
      
      <button id="mailConfirmacion" type="button" class="btn btn-primary">Quiero Confirmación</button>
      <a id="tagAaPagos" href="#formasDePago"></a>
      `;
      // Appendear BotonPago:
      tagAaPagos = document.getElementById("tagAaPagos");
      tagAaPagos.append(botonPago);
      
      
  
   let mailConfirmacion = document.getElementById("mailConfirmacion");
   
   mailConfirmacion.onclick = () => {

    Swal.fire({
      icon: 'success',
      title: 'Listo!!',
      text: 'Te hemos enviado el detalle de esta compra al e-mail que informaste en el formulario.',
      
    })
  
    }

    mostrarFormasDePago();
    dispararTimerPagosMasterCard();
    dispararTimerPagosVisa();
    dispararTimerPagosPayPal();

    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor debes completar todos los Campos correctamente.',
        
      })
      
      
    }
  }
  
  // Sección Timers Tarjetas:
  let tiempo;
  let timerCompra;
 // Funcion que dispara el Timer de MasterCard:
  const dispararTimerPagosMasterCard = () =>{

  let triggerTimerMasterCard =  document.getElementById("triggerTimerMasterCard");
  triggerTimerMasterCard.onclick = () => {
  
  tiempo = 60;
  let containerTimerMasterCard = document.getElementById("containerTimerMasterCard");
  
  let timerCompra = setInterval( () =>{
  containerTimerMasterCard.innerHTML =`Te quedan ${tiempo} segundos para finalizar tu compra.`;
  tiempo--;
  
  let closeButtonMasterCard = document.getElementById("closeButtonMasterCard");
  closeButtonMasterCard.onclick = () =>{
  clearInterval(timerCompra);
 }
 
 let pagarMaster = document.getElementById("pagarMaster");
  pagarMaster.onclick = () => {
    clearInterval(timerCompra);
    triggerTimerMasterCard.remove();
    Swal.fire({
      icon: 'success',
      title: 'El Pago fue realizado con Éxito!!',
      text: 'Gracias por tu Compra.',
      
    })
} 

  let cancelarMaster = document.getElementById("cancelarMaster");
  cancelarMaster.onclick = () =>{
  clearInterval(timerCompra);
  }
  
  if (tiempo == 0) {
    clearInterval(timerCompra);
    containerTimerMasterCard.innerHTML = "";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Se te acabó el tiempo. Si quieres utilizar este medio de Pago, debes Reiniciar la Compra y cargar el Formulario nuevamente. Muchas Gracias.',
      
    })
    pagarMaster.remove();
    triggerTimerMasterCard.remove();
  } 
  
 } ,1000);
}
}  

// Funcion que dispara el Timer de Visa:
const dispararTimerPagosVisa = () =>{

  let triggerTimerVisa =  document.getElementById("triggerTimerVisa");
  triggerTimerVisa.onclick = () => {
  
  tiempo = 60;
  let containerTimerVisa = document.getElementById("containerTimerVisa");
  
  let timerCompra = setInterval( () =>{
  containerTimerVisa.innerHTML =`Te quedan ${tiempo} segundos para finalizar tu compra.`;
  tiempo--;
  
  let closeButtonVisa = document.getElementById("closeButtonVisa");
  closeButtonVisa.onclick = () =>{
  clearInterval(timerCompra);
 }
 
 let pagarVisa = document.getElementById("pagarVisa");
  pagarVisa.onclick = () => {
    clearInterval(timerCompra);
    triggerTimerVisa.remove();
    Swal.fire({
      icon: 'success',
      title: 'El Pago fue realizado con Éxito!!',
      text: 'Gracias por tu Compra.',
      
    })
} 

  let cancelarVisa = document.getElementById("cancelarVisa");
  cancelarVisa.onclick = () =>{
  clearInterval(timerCompra);
  }
  
  if (tiempo == 0) {
    clearInterval(timerCompra);
    containerTimerVisa.innerHTML = "";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Se te acabó el tiempo. Si quieres utilizar este medio de Pago, debes Reiniciar la Compra y cargar el Formulario nuevamente. Muchas Gracias.',
      
    })
    pagarVisa.remove();
    triggerTimerVisa.remove();
  } 
  
 } ,1000);
}
}  

// Funcion que dispara el Timer de PayPal:
const dispararTimerPagosPayPal = () =>{

  let triggerTimerPayPal =  document.getElementById("triggerTimerPayPal");
  triggerTimerPayPal.onclick = () => {
  
  tiempo = 60;
  let containerTimerPayPal = document.getElementById("containerTimerPayPal");
  
  let timerCompra = setInterval( () =>{
  containerTimerPayPal.innerHTML =`Te quedan ${tiempo} segundos para finalizar tu compra.`;
  tiempo--;
  
  let closeButtonPayPal = document.getElementById("closeButtonPayPal");
  closeButtonPayPal.onclick = () =>{
  clearInterval(timerCompra);
 }
 
 let pagarPayPal = document.getElementById("pagarPayPal");
  pagarPayPal.onclick = () => {
    clearInterval(timerCompra);
    triggerTimerPayPal.remove();
    Swal.fire({
      icon: 'success',
      title: 'El Pago fue realizado con Éxito!!',
      text: 'Gracias por tu Compra.',
      
    })
} 

  let cancelarPayPal = document.getElementById("cancelarPayPal");
  cancelarPayPal.onclick = () =>{
  clearInterval(timerCompra);
  }
  
  if (tiempo == 0) {
    clearInterval(timerCompra);
    containerTimerPayPal.innerHTML = "";
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Se te acabó el tiempo. Si quieres utilizar este medio de Pago, debes Reiniciar la Compra y cargar el Formulario nuevamente. Muchas Gracias.',
      
    })
    pagarPayPal.remove();
    triggerTimerPayPal.remove();
  } 
  
 } ,1000);
}
}  
  
// Info a mostrar dinamicamente en las Tarjetas:
  
  const dinamizarMasterCard = () => {

  let masterCard = document.getElementById("masterCard");
  masterCard.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
  IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
  <strong>Suma Total a abonar: $${sumaCarritoRecuperado*1.21}</strong><br/>
  <br/>
  <br/>
  <strong>Con MasterCard aprovechá 6 cuotas sin interés.</strong>`;
  
  
    }

  dinamizarMasterCard();
  
  

  const dinamizarPayPal = () => {

    let payPal = document.getElementById("payPal");
    payPal.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
    IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
    <strong>Sub-Total: $${sumaCarritoRecuperado*1.21}</strong><br/>
    <br/>
    <br/>
    Con PayPal pagas en 1 solo Pago pero tenes un 5% de Descuento.<br/>
    <strong>Importe Total a abonar: $${sumaCarritoRecuperado*1.21*0.95}</strong>`;
  
    }
  
    dinamizarPayPal();
  
    let pagarPayPal = document.getElementById("pagarPayPal");
    pagarPayPal.onclick = () => {
  
      Swal.fire({
        icon: 'success',
        title: 'El Pago fue realizado con Éxito!!',
        text: 'Gracias por tu Compra.',
        
      })
  
    }

    const dinamizarVisa = () => {

      let visa = document.getElementById("visa");
      visa.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
      IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
      <strong>Sub-Total: $${sumaCarritoRecuperado*1.21}</strong><br/>
      <br/>
      <br/>
      Pagando con Visa dispones de 12 cuotas fijas. La TNA aplicada es del 25%.<br/>
      <strong>El Valor final de cada una de tus Cuotas Fijas es de: $${(sumaCarritoRecuperado*1.21*1.25/12).toFixed(2)}</strong>`;
    
      }
    
      dinamizarVisa();
    
      let pagarVisa = document.getElementById("pagarVisa");
      pagarVisa.onclick = () => {
    
        Swal.fire({
          icon: 'success',
          title: 'El Pago fue realizado con Éxito!!',
          text: 'Gracias por tu Compra.',
          
        })
    
      }

      