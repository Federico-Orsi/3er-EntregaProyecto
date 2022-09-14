const elementosCarrito = [];

//  Aqui debajo aplico el Operador AND para el Desafío de Operadores avanzados:
carritoRecuperado = localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito"));
console.log(carritoRecuperado);


// Clase Constructora de Elementos a agregar al Carrito:

class ElementoCarrito {
  constructor (servicio, cantidad){
    this.servicio = servicio;
    this.cantidad = cantidad;
    
  }
}


// Clase Constructora de Servicios:


class Servicio {
  constructor (id, item, descripcion, precioNetoPlan, foto){
    this.id = id;
    this.item = item;
    this.descripcion = descripcion;
    this.precioNetoPlan = precioNetoPlan;
    this.foto = foto;
    
  }
}

// Creacion de cada Servicio (Objeto):

const planBasico = new Servicio(1, "Plan Básico", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias)." , 10000, "../img/teamwork.jpg");

const planIntermedio = new Servicio(2, "Plan Intermedio", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables).", 20000, "../img/hands-on-the-table-.jpg");

const planPremium = new Servicio(3, "Plan Premium", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables). Nos ocuparemos de resolver todo lo Laboral (Liquidación de sueldos y jornales, Liquidación de Boletas Sindicales). Por último este servicio Premium incluye además asesoramiento permamente en materia Financiera y Tributaria-Fiscal.", 30000, "../img/financePeopleDesk.jpg");

const mercadoDeCapitales = new Servicio(4, "Mercado de Capitales", "Acceda a un Informe completo sobre las mejores Opciones y alternativas de inversión." , 35000, "../img/stock-market-Hand.jpg");

const criptoMonedas = new Servicio(5, "Cripto Monedas", "Lo ayudamos a iniciarse y a descubrir todas las oportunidades financieras disponibles en los activos digitales. Conozca toda la Legislación vigente en Cripto Monedas y Billeteras Virtuales.", 40000, "../img/Bitcoins.jpg");

const investigacionDeMercado = new Servicio(6, "Auditoría", "Nuestro equipo de Profesionales analizará en detalle su estrategia corporativa actual, hará un Diagnóstico de la misma y le presentará alternativas de mejora y planes de acción en concreto con respecto a su requerimiento.", 80000, "../img/financeStrategy.jpg");


// Generacion de arrays vacíos:

const servicios = [];
const informes = [];

// Función que agrega elementos a estos Arrays:

const agregarItems = () => {

servicios.push(planBasico);
servicios.push(planIntermedio);
servicios.push(planPremium);
informes.push(mercadoDeCapitales);
informes.push(criptoMonedas);
informes.push(investigacionDeMercado);

}

agregarItems();



// Funcion para Ocultar Card del Html: (es la Card que se usó de modelo para Renderizar los Servicios)

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
      <div class="card-body text-center">
        <h5 class="card-title">${servicio.item}</h5>
        <p class="card-text">${servicio.descripcion}</p>
        <div class="d-flex justify-content-around mt-4">
           <p style="cursor: default;" class="btn btn-secondary">$ ${servicio.precioNetoPlan}</p>
           <p id="planDinamizado${servicio.id}" class="btn btn-primary">Agregar</p>
        </div>
      </div>
    </div>
    `;
    
  }


 
  for (const servicio of informes) {
  

    informesAplicandoForOf.className = "d-flex justify-content-evenly";
    informesAplicandoForOf.innerHTML += `
      <div class="card mt-4 mb-4" style="width: 18rem;">
      <img src=${servicio.foto} class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${servicio.item}</h5>
        <p class="card-text">${servicio.descripcion}</p>
        <div class="d-flex justify-content-around mt-4">
           <p style="cursor: default ;" class="btn btn-secondary">$ ${servicio.precioNetoPlan}</p>
           <p id="planDinamizado${servicio.id}" class="btn btn-primary">Agregar</p>
        </div>
      </div>
      </div>
    `;
      
  }
  
  // Aqui debajo aplico el Spread para el Desafío de Operadores avanzados:
  servicios.push(...informes);
  
  
 
  
  servicios.forEach(servicio => {
     // Boton que pushea Elementos al Carrito y activa la funcion GenerarCarrito!!
    let botonPusheaProducto = document.getElementById(`planDinamizado${servicio.id}`);

    botonPusheaProducto.onclick = () => {
      
     
     let itemYaExistenteEnCarrito = elementosCarrito.find(elemento => elemento.servicio.id == servicio.id); 
     
     if(itemYaExistenteEnCarrito){
       itemYaExistenteEnCarrito.cantidad+=1;
      
       Toastify({

        text: `Usted agregó una unidad adicional de: ${servicio.item}.`,
        
        duration: 3000,
        
        destination: "https://github.com/apvarun/toastify-js",
        
        
        avatar: "../img/shopping-cart-svgrepo-com(x).svg",

        gravity: `bottom`,
      
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
        }).showToast();
     } else {

      
      Toastify({

        text: `Su servicio: ${servicio.item}, fue agregado al Carrito exitosamente.`,
        
        duration: 3000,
        
        avatar: "../img/shopping-cart-svgrepo-com.svg",

        gravity: `top`,
      
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
        }).showToast();
       
       let elementoCarrito = new ElementoCarrito(servicio, 1);
       elementosCarrito.push(elementoCarrito) ;
       
         
      }
      generarCarrito();

    }

  });


}

renderizarPlanesYPushearElementosAlCarrito();

 

// Definición de Variables para Carrito:

  let contenedorCarrito = document.getElementById("contenedorFilaCarrito");
  let modalFooter = document.getElementById("footerModal");

  // Función que genera el Carrito de Compras:
  
  const generarCarrito = () => {

  
  let filaDelModal = '';
  contenedorCarrito.innerHTML = '';
  
  let sumaCarro = 0;

 elementosCarrito.forEach((elemento) => {

 let filaDelModal = document.createElement("tr");   


 filaDelModal.innerHTML =`
                
              
                <td>${elemento.servicio.id}</td>
                <td>${elemento.servicio.item}</td>
                <td><input id="servicio-cantidad-${elemento.servicio.id}" style="width: 30px;" type="number" value=${elemento.cantidad} min="1" max="1000" step="1"></td>
                <td>${elemento.servicio.precioNetoPlan}</td>
                <td>${elemento.servicio.precioNetoPlan*elemento.cantidad}</td>
                <td><button id="servicio-eliminar-${elemento.servicio.id}" style="width: 40px;" type="button" class="btn btn-danger" ><i class="bi bi-trash"></i></button></td>
           


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

//  Aqui debajo aplico el Ternario para el Desafío de Operadores avanzados:

 elementosCarrito.length == 0 ? modalFooter.innerHTML = `
 <th scope="row" colspan="5"> Carrito Vacío - Comience su Compra. </th>
 `  : modalFooter.innerHTML = `
 <th scope="row" colspan="5"> El Total de su Compra es: $${sumaCarro} </th>
 `;

localStorage.setItem("carrito", JSON.stringify(elementosCarrito));


}




// funcion para eliminar elementos del Carrito:

function eliminarItem(productoAEliminar) {
 
 const itemAEliminar = elementosCarrito.find(elemento => elemento.servicio.id == productoAEliminar.servicio.id);
 const indice = elementosCarrito.indexOf(itemAEliminar);
 elementosCarrito.splice(indice, 1);
}

  
//  Prueba para el localStorage:
 localStorage.setItem("envío", "true");

  
//  Evento de Click que Permite avanzar en la Compra solo si el Carrito tiene agregado al menos 1 item:

  let confirmarCompra = document.getElementById("confirmarCompra");
  confirmarCompra.onclick = () => {

  elementosCarrito.length != 0  &&  
  
  Swal.fire({
  icon: 'success',
  title: 'Gracias por tu Confirmación.',
  text: 'Para finalizar tu Compra, por favor completa el Formulario haciendo Click aqui debajo.',
  footer: '<a href="../secciones/contacto.html">Ir a Formulario</a>'
});

 elementosCarrito.length == 0  &&  

 Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes agregar algún Servicio al Carrito para poder confirmar tu Compra.',
  
});

  

}


// GET API para mostrar info del Dolar en tiempo Real!!

//  Declaración de Variables y estilos a nivel Global:

 let dolarOficial = document.getElementById("dolarOficial");
 let tituloDolarOficial = document.getElementById("tituloDolarOficial");
 let dolarBlue = document.getElementById("dolarBlue");
 let contenedorDolarOficial = document.getElementById("contenedorDolarOficial");
 let contenedorDolarBlue = document.getElementById("contenedorDolarBlue");
 contenedorDolarOficial.style.background = "#566e74"; 
 contenedorDolarOficial.style.color = "white";
 contenedorDolarBlue.style.background = "#566e74"; 
 contenedorDolarBlue.style.color = "white";

//  Funcion para Mostrar el Dolar:
 
 const mostrarDolar = () => {

  fetch("https://api.bluelytics.com.ar/v2/latest")
 
  .then(response => response.json())
  .then(dolar => {
   

   dolarOficial.innerHTML = `
   Compra: $${dolar.oficial.value_buy} - Venta: $${dolar.oficial.value_sell} 
   `;
   
   dolarBlue.innerHTML = `
   Compra: $${dolar.blue.value_buy} - Venta: $${dolar.blue.value_sell}`;

  })


}

mostrarDolar();

// Aqui le estoy quitando el Pointer a las Cards creadas con CSS: (ya que las mismas no ejecutan ninguna acción al clickearlas)

let impuestosQuitarPointer = document.getElementById("impuestosQuitarPointer"); 
impuestosQuitarPointer.style.cursor = "default";

let laboralQuitarPointer = document.getElementById("laboralQuitarPointer"); 
laboralQuitarPointer.style.cursor = "default";

let contabilidadQuitarPointer = document.getElementById("contabilidadQuitarPointer"); 
contabilidadQuitarPointer.style.cursor = "default";
