carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));

let sumaCarritoRecuperado = 0 ;

for (const elemento of carritoRecuperado) {
  
sumaCarritoRecuperado+=elemento.cantidad*elemento.servicio.precioNetoPlan;  

}

// Validación de Formulario con Expresiones Regulares

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
  
  

  let mailConfirmacion = document.getElementById("mailConfirmacion");
  let inputApellido = document.getElementById("inputApellido");
  let inputNombre = document.getElementById("inputNombre");
  let formulario = document.getElementById("formulario");
  
  
  // inputApellido.onchange = (e) => {

  // expresiones.nombre.test(e.target.value)  &&  console.log("Funciona!!"); 
  
  // };
  
  
  
  formulario.onsubmit = (e) => {
   if ((expresiones.nombre.test(inputApellido.value) == false) || (expresiones.nombre.test(inputNombre.value) == false )) {
      e.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor no olvides completar tu Nombre y Apellido.',
        
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

    