carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));

let sumaCarritoRecuperado = 0 ;

for (const elemento of carritoRecuperado) {
  
sumaCarritoRecuperado+=elemento.cantidad*elemento.servicio.precioNetoPlan;  

}

console.log(sumaCarritoRecuperado);


  
  let mailConfirmacion = document.getElementById("mailConfirmacion");
  let inputApellido = document.getElementById("inputAddress");
  let inputNombre = document.getElementById("inputNombre");
  let formulario = document.getElementById("formulario");
  
  formulario.onsubmit = (e) => {
   if ((inputApellido.value == "") || (inputNombre.value == "" )) {
      e.preventDefault();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor no olvides completar tu Nombre y Apellido.',
        
      })
   
    } 
   
  }

  
  mailConfirmacion.onclick = () => {

  Swal.fire({
    icon: 'success',
    title: 'Gracias por enviarnos tus Datos',
    text: 'Te hemos enviado el detalle de esta compra al e-mail que informaste en el formulario.',
    
  })

  }

  let masterCard = document.getElementById("masterCard");
  masterCard.innerHTML = `El total neto de su compra es de $${sumaCarritoRecuperado}.<br/>
  IVA (21%) = $${sumaCarritoRecuperado*0.21}<br/>
  <strong>Suma Total a abonar: $${sumaCarritoRecuperado*1.21}</strong><br/>
  <br/>
  <br/>
  <strong>Con MasterCard aprovechá 6 cuotas sin interés.</strong>`;

  let pagarMaster = document.getElementById("pagarMaster");
  pagarMaster.onclick = () => {

    Swal.fire({
      icon: 'success',
      title: 'El Pago fue realizado con Éxito!!',
      text: 'Gracias por tu Compra.',
      
    })

  }