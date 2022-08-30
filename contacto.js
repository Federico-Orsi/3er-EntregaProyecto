// const swalConImg = () => {
 
  
//     Swal.fire({
//       title: 'Solo falta un paso más!!',
//       text: 'Por favor completa el siguiente formulario antes de realizar el Pago.',
//       imageUrl: '../img/teamwork.jpg',
//       imageWidth: 400,
//       imageHeight: 200,
//       imageAlt: 'Custom image',
//     })
  
//   }
  
//   swalConImg();
  
  
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
   
    } else {
   
    Swal.fire({
      icon: 'success',
      title: 'Gracias por enviarnos tus Datos',
      text: 'A continuación elegí el medio de Pago más conveniente.',
      footer: '<a href="#formasDePago">Ir a Pago</a>'
    })
  }
  
  }



  
