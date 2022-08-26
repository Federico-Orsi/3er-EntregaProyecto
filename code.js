const elementosCarrito = [];

carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));
console.log(carritoRecuperado);

// class Cliente {
//   constructor (codigoCliente, razonSocial, condicionIva, tipoDePlan){
//     this.codigoCliente = codigoCliente;
//     this.razonSocial = razonSocial;
//     this.condicionIva = condicionIva;
//     this.tipoDePlan = tipoDePlan;
   
//   }

// }

// // Clientes con datos Hardcodeados:

// const cliente1 = new Cliente(1111, "Trebol srl", "Resp. Inscripto", "Intermedio");
// const cliente2 = new Cliente(2222, "Space SA", "Resp. Inscripto", "Premium");
// const cliente3 = new Cliente(3333, "Fabio Tripodi", "Autonomo", "Basico");




// Cliente generado de manera dinámica:

// let codCliente = Number(prompt("Hola, por favor ingrese su Código de cliente."));
// let razSocial = prompt("Hola, por favor ingrese su Razón Social.");
// let condIva = prompt("Hola, por favor ingrese su condicion frente al IVA.");
// let plan = prompt("Hola, por favor ingrese su tipo de plan elegido.");


// const nuevoCliente = new Cliente(codCliente, razSocial, condIva, plan);


class ElementoCarrito {
  constructor (servicio, cantidad){
    this.servicio = servicio;
    this.cantidad = cantidad;
    
  }
}





class Servicio {
  constructor (id, item, descripcion, precioNetoPlan, foto){
    this.id = id;
    this.item = item;
    this.descripcion = descripcion;
    this.precioNetoPlan = precioNetoPlan;
    this.foto = foto;
    
  }
}

const planBasico = new Servicio(1, "Plan Básico", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias)." , 10000, "../img/teamwork.jpg");

const planIntermedio = new Servicio(2, "Plan Intermedio", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables).", 20000, "../img/hands-on-the-table-.jpg");

const planPremium = new Servicio(3, "Plan Premium", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables). Nos ocuparemos de resolver todo lo Laboral (Liquidación de sueldos y jornales, Liquidación de Boletas Sindicales). Por último este servicio Premium incluye además asesoramiento permamente en materia Financiera y Tributaria-Fiscal.", 30000, "../img/financePeopleDesk.jpg");

const mercadoDeCapitales = new Servicio(4, "Mercado de Capitales", "Acceda a un Informe completo sobre las mejores Opciones y alternativas de inversión." , 35000, "../img/stock-market-Hand.jpg");

const criptoMonedas = new Servicio(5, "Cripto Monedas", "Lo ayudamos a iniciarse y a descubrir todas las oportunidades financieras disponibles en los activos digitales. Conozca toda la Legislación vigente en Cripto Monedas y Billeteras Virtuales.", 40000, "../img/Bitcoins.jpg");

const investigacionDeMercado = new Servicio(6, "Auditoría", "Nuestro equipo de Profesionales analizará en detalle su estrategia corporativa actual, hará un Diagnóstico de la misma y le presentará alternativas de mejora y planes de acción en concreto con respecto a su requerimiento.", 80000, "../img/financeStrategy.jpg");




const servicios = [];
const informes = [];

const agregarItems = () => {

servicios.push(planBasico);
servicios.push(planIntermedio);
servicios.push(planPremium);
informes.push(mercadoDeCapitales);
informes.push(criptoMonedas);
informes.push(investigacionDeMercado);




}

agregarItems();





const vaciarConJs = () => {

  let dejarVacio = document.getElementById("dejarVacioConJs"); 
  dejarVacio.innerHTML = "";

}
 
vaciarConJs();




// Servicios agregados dinamicamente:

let planesAplicandoForOf = document.getElementById("planesAplicandoForOf");
let informesAplicandoForOf = document.getElementById("informesAplicandoForOf");



const renderizarPlanesYPushearElementosAlCarrito = () => {

  for (const servicio of servicios) {
  

    planesAplicandoForOf.className = "d-flex justify-content-evenly";
    planesAplicandoForOf.innerHTML += `
      <div class="card mt-4 mb-4" style="width: 18rem;">
      <img src=${servicio.foto} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${servicio.item}</h5>
        <p class="card-text">${servicio.descripcion}</p>
        <p id="planDinamizado${servicio.id}" class="btn btn-primary">${servicio.precioNetoPlan}</p>
      </div>
      </div>
    `;

  }
 
  for (const servicio of informes) {
  

    informesAplicandoForOf.className = "d-flex justify-content-evenly";
    informesAplicandoForOf.innerHTML += `
      <div class="card mt-4 mb-4" style="width: 18rem;">
      <img src=${servicio.foto} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${servicio.item}</h5>
        <p class="card-text">${servicio.descripcion}</p>
        <p id="planDinamizado${servicio.id}" class="btn btn-primary">${servicio.precioNetoPlan}</p>
      </div>
      </div>
    `;

  }
  
  servicios.push(...informes);
  
  
  // Boton que pushea Elementos al Carrito y activa la funcion GenerarCarrito!!
  
  servicios.forEach(servicio => {
    
    let botonPusheaProducto = document.getElementById(`planDinamizado${servicio.id}`);

    botonPusheaProducto.onclick = () => {
      
     
     let itemYaExistenteEnCarrito = elementosCarrito.find(elemento => elemento.servicio.id == servicio.id); 
     
     if(itemYaExistenteEnCarrito){
       itemYaExistenteEnCarrito.cantidad+=1;
       confirm(`Usted agregó una unidad adicional de: ${servicio.item}.`);
     } else {

      confirm(`Su servicio: ${servicio.item}, fue agregado al Carrito exitosamente.`);
       
       let elementoCarrito = new ElementoCarrito(servicio, 1);
       elementosCarrito.push(elementoCarrito) ;
       
         
      }
      generarCarrito();

    }

  });


}

renderizarPlanesYPushearElementosAlCarrito();

 

  let contenedorCarrito = document.getElementById("contenedorFilaCarrito");
  let modalFooter = document.getElementById("footerModal");


  
  const generarCarrito = () => {

  
  let filaDelModal = '';
  contenedorCarrito.innerHTML = '';
  
  let sumaCarro = 0;

 elementosCarrito.forEach((elemento) => {

 let filaDelModal = document.createElement("tr");   


 filaDelModal.innerHTML =`
                
              
                <td>${elemento.servicio.id}</td>
                <td>${elemento.servicio.item}</td>
                <td><input id="servicio-cantidad-${elemento.servicio.id}" style="width: 50px;" type="number" value=${elemento.cantidad} min="1" max="1000" step="1"></td>
                <td>${elemento.servicio.precioNetoPlan}</td>
                <td>${elemento.servicio.precioNetoPlan*elemento.cantidad}</td>
                <td><button id="servicio-eliminar-${elemento.servicio.id}" type="button" class="btn btn-danger" ><i class="bi bi-trash"></i></button></td>
           


 `;

 contenedorCarrito.append(filaDelModal);  

 sumaCarro+=elemento.cantidad*elemento.servicio.precioNetoPlan;

  let inputCantidadProducto = document.getElementById(`servicio-cantidad-${elemento.servicio.id}`);

  inputCantidadProducto.onchange = () => {

   elemento.cantidad = inputCantidadProducto.value;
   
   
   generarCarrito();
}
 
  let botonEliminaProducto = document.getElementById(`servicio-eliminar-${elemento.servicio.id}`);
      
  botonEliminaProducto.onclick = (e) => {

     eliminarItem(elemento);
     generarCarrito();
    
    } ;


});

 if(elementosCarrito.length == 0){
  modalFooter.innerHTML = `
  <th scope="row" colspan="5"> Carrito Vacío - Comience su Compra. </th>
  `;
} else{
  modalFooter.innerHTML = `
  <th scope="row" colspan="5"> El Total de su Compra es: $${sumaCarro} </th>
  `;
}

localStorage.setItem("carrito", JSON.stringify(elementosCarrito));


}




// funcion para eliminar elementos del Carrito:

function eliminarItem(productoAEliminar) {
 
 const itemAEliminar = elementosCarrito.find(elemento => elemento.servicio.id == productoAEliminar.servicio.id);
 const indice = elementosCarrito.indexOf(itemAEliminar);
 elementosCarrito.splice(indice, 1);



  // Julio aquí debajo esta la forma que nos explicaste para eliminar elementos del Carro, la cual no me funcionó. Me funcionó mejor con el IndexOf, pero de esta manera tampoco me termina de funcionar perfectamente por el momento.
  
  // const elementosAMantener = elementosCarrito.filter((elemento) => elemento.servicio.id != productoAEliminar.servicio.id);
  
               
  //  elementosCarrito.length == 0 ;
  
  // const elementosCarrito = elementosAMantener.forEach(elemento => elementosCarrito.push(elemento));
  
  }
  
  //-----------------------------------------------------//


  
  localStorage.setItem("envío", "true");

  
 
  
  let aceptarCarrito = document.getElementById("aceptarCarrito");
  aceptarCarrito.onclick = () => {
 
  
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  

  // Swal.fire({
  //   icon: 'error',
  //   title: 'Oops...',
  //   text: 'Something went wrong!',
  //   footer: '<a href="#quieroInfo">Why do I have this issue?</a>'
  // })

}


let pruebaSweet = document.getElementById("pruebaSweet");
  pruebaSweet.onclick = () => {

  Swal.fire({
  icon: 'success',
  title: 'Gracias por tu Compra',
  text: 'Clickeá debajo para conocer los medios de pago',
  footer: '<a href="../secciones/contacto.html">Ir a Pago</a>'
})

}



let pruebaSwal = document.getElementById("pruebaSwal");
  pruebaSwal.onclick = () => {



 
 Toastify({

  text: "https://images.app.goo.gl/HmdZf7xaD5qwewJ1A   This is a fucking toast maaan!!  " + planBasico.item,
  
  duration: 3000
  

  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
  
  // destination: "https://github.com/apvarun/toastify-js",

  // avatar:  "https://images.app.goo.gl/HmdZf7xaD5qwewJ1A",
  
  }).showToast();

// Swal.fire({
//   title: '<strong>Gracias<u>por su Compra</u></strong>',
//   icon: 'info',
//   html:
//     'You can use <b>bold text</b>, ' +
//     '<a href="https://federico-orsi.github.io/Simulador-Interactivo/secciones/contacto.html">ver Cuotas</a> ' +
//     'and other HTML tags',
//   showCloseButton: true,
//   showCancelButton: true,
//   focusConfirm: false,
//   confirmButtonText:
//     '<i class="fa fa-thumbs-up"></i> Great!',
//   confirmButtonAriaLabel: 'Thumbs up, great!',
//   cancelButtonText:
//     '<i class="fa fa-thumbs-down"></i>',
//   cancelButtonAriaLabel: 'Thumbs down'
// })

}