carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));

let sumaCarritoRecuperado = 0 ;

for (const elemento of carritoRecuperado) {
  
sumaCarritoRecuperado+=elemento.cantidad*elemento.servicio.precioNetoPlan;  

}

// Validación de Formulario con Expresiones Regulares

const expresiones = {
	domicilio: /^[a-zA-ZÀ-ÿ0-9\s\_\-]{1,30}$/, // Letras, numeros, guion y guion_bajo
	ZipCode: /^[A-Z0-9]{4,8}$/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numeros: /^\d{4,10}$/ // 7 a 14 numeros.
}
  
  

  let mailConfirmacion = document.getElementById("mailConfirmacion");
  let inputApellido = document.getElementById("inputApellido");
  let inputNombre = document.getElementById("inputNombre");
  let formulario = document.getElementById("formulario");
  let inputDireccion = document.getElementById("direccion");
  let inputCiudad = document.getElementById("inputCity");
  let inputZipCode = document.getElementById("inputZipCode");
  
  inputApellido.oninput = () => {

  if ((expresiones.nombre.test(inputApellido.value) == false)) {

    inputApellido.style.color = "red";
  } else {

    inputApellido.style.color = "black";
  }
}
  
inputNombre.oninput = () => {

  if ((expresiones.nombre.test(inputNombre.value) == false)) {

    inputNombre.style.color = "red";
  } else {

    inputNombre.style.color = "black";
  }
}  
  
inputDireccion.oninput = () => {

  if ((expresiones.domicilio.test(inputDireccion.value) == false)) {

    inputDireccion.style.color = "red";
  } else {

    inputDireccion.style.color = "black";
  }
}  

inputCiudad.oninput = () => {

  if ((expresiones.nombre.test(inputCiudad.value) == false)) {

    inputCiudad.style.color = "red";
  } else {

    inputCiudad.style.color = "black";
  }
}  

inputZipCode.oninput = () => {

  if ((expresiones.ZipCode.test(inputZipCode.value) == false)) {

    inputZipCode.style.color = "red";
  } else {

    inputZipCode.style.color = "black";
  }
}  

// Contenedor de Formas de Pago y Funcion que las hace aparecer en Pantalla!!
  
  containerFormasDePago = document.getElementById("containerFormasDePago");
  
  mostrarFormasDePago = () => {

  containerFormasDePago.innerHTML = `
  
  <section id="formasDePago" class="text-center mt-5 mb-5">
          <h3>Formas de Pago</h3>
         <article class="d-flex justify-content-around mt-5">
          
          <figure class="figure w-25">
            <img src="../img/Visa_Inc._logoSvg.svg" class="figure-img img-fluid rounded w-50 h-50" alt="Visa">
                                               <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalVisa">Ver cuotas</button></figcaption>
          </figure>

          <figure class="figure">
            <img src="../img/PayPalSvg.svg" class="figure-img img-fluid rounded" alt="PayPal">
                                               <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalPayPal">Ver cuotas</button></figcaption>
          </figure>
     
          <figure class="figure">
            <img src="../img/MasterCard_LogoSvg.svg" class="figure-img img-fluid rounded w-50 h-50" alt="Master">
                                              <!-- Boton Trigger Modal -->
            <figcaption class="figure-caption"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver cuotas</button></figcaption>
          </figure>

          </article>
          </section>
  
  `;


  }
  
  formulario.onsubmit = (e) => {
   
    e.preventDefault(); 
   
    if ((expresiones.nombre.test(inputApellido.value)) && (expresiones.nombre.test(inputNombre.value)) && (expresiones.domicilio.test(inputDireccion.value)) && (expresiones.nombre.test(inputCiudad.value)) && (expresiones.ZipCode.test(inputZipCode.value))) {
      formulario.reset();

      Swal.fire({
        icon: 'success',
        title: 'Gracias, tus datos se enviaron correctamente.',
        text: 'Ahora podes elegir tu Forma de Pago más Conveniente.',
        
      })
      
      botonPago = document.createElement("button");
      botonPago.innerText = "Ir a Pagos";
      botonPago.setAttribute("type","button");
      botonPago.className = "btn btn-primary";
      
      tagAaPagos = document.getElementById("tagAaPagos");
      tagAaPagos.append(botonPago);
      
      botonSubmit = document.getElementById("botonSubmit");
      botonSubmit.remove();

      mostrarFormasDePago();

    } else {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor debes completar todos los Inputs correctamente.',
        
      })
      
      
      
      
    }

    
   
  }
  
  let terminos = document.getElementById("gridCheck");
  
 

  mailConfirmacion.onclick = () => {

  Swal.fire({
    icon: 'success',
    title: 'Gracias por enviarnos tus Datos',
    text: 'Te hemos enviado el detalle de esta compra al e-mail que informaste en el formulario.',
    
  })

  }

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

  let pagarMaster = document.getElementById("pagarMaster");
  pagarMaster.onclick = () => {

    Swal.fire({
      icon: 'success',
      title: 'El Pago fue realizado con Éxito!!',
      text: 'Gracias por tu Compra.',
      
    })

  }

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

    