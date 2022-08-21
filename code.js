
class Cliente {
  constructor (codigoCliente, razonSocial, condicionIva, tipoDePlan){
    this.codigoCliente = codigoCliente;
    this.razonSocial = razonSocial;
    this.condicionIva = condicionIva;
    this.tipoDePlan = tipoDePlan;
   
  }

}

// Clientes con datos Hardcodeados:

const cliente1 = new Cliente(1111, "Trebol srl", "Resp. Inscripto", "Intermedio");
const cliente2 = new Cliente(2222, "Space SA", "Resp. Inscripto", "Premium");
const cliente3 = new Cliente(3333, "Fabio Tripodi", "Autonomo", "Basico");
  



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

const elementosCarrito = [];



class Servicio {
  constructor (id, plan, descripcion, precioNetoPlan){
    this.id = id;
    this.plan = plan;
    this.descripcion = descripcion;
    this.precioNetoPlan = precioNetoPlan;
    
  }
}

const planBasico = new Servicio(1, "Básico", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias)." , 10000);

const planIntermedio = new Servicio(2, "Intermedio", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables).", 20000);

const planPremium = new Servicio(3, "Premium", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables). Nos ocuparemos de resolver todo lo Laboral (Liquidación de sueldos y jornales, Liquidación de Boletas Sindicales). Por último este servicio Premium incluye además asesoramiento permamente en materia Financiera y Tributaria-Fiscal.", 30000);

const servicios = [];

const agregarServicios = () => {

servicios.push(planBasico);
servicios.push(planIntermedio);
servicios.push(planPremium);
console.log(servicios);


}

agregarServicios();





const vaciarConJs = () => {

  let dejarVacio = document.getElementById("dejarVacioConJs"); 
  dejarVacio.innerHTML = "";

}
 
vaciarConJs();




// Servicios agregados dinamicamente:

let planesAplicandoForOf = document.getElementById("planesAplicandoForOf");



const renderizarPlanesYPushearElementosAlCarrito = () => {

  for (const servicio of servicios) {
  

    planesAplicandoForOf.className = "d-flex justify-content-around";
    planesAplicandoForOf.innerHTML += `
      <div class="card mt-4 mb-4" style="width: 18rem;">
      <img src="../img/cup-of-coffee.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Plan ${servicio.plan}</h5>
        <p class="card-text">${servicio.descripcion}</p>
        <p id="planDinamizado${servicio.id}" class="btn btn-primary">${servicio.precioNetoPlan}</p>
      </div>
      </div>
    `;

  }
 
  // Boton que pushea Elementos al Carrito y activa la funcion GenerarCarrito!!
  
  servicios.forEach(servicio => {
    
    let botonPusheaProducto = document.getElementById(`planDinamizado${servicio.id}`);

    botonPusheaProducto.onclick = () => {
      
     
     let itemYaExistenteEnCarrito = elementosCarrito.find(elemento => elemento.servicio.id == servicio.id); 
     
     if(itemYaExistenteEnCarrito){
       itemYaExistenteEnCarrito.cantidad+=1;
       confirm(`Usted agregó una unidad adicional al Plan ${servicio.plan}.`);
     } else {

      confirm(`Usted seleccionó el Plan ${servicio.plan}.`);
       
       let elementoCarrito = new ElementoCarrito(servicio, 1);
       elementosCarrito.push(elementoCarrito) ;
       
       generarCarrito();  
      }
    }

  });


}

renderizarPlanesYPushearElementosAlCarrito();

 

  let contenedorCarrito = document.getElementById("contenedorFilaCarrito");
  let modalFooter = document.getElementById("footerModal");


  
  const generarCarrito = () => {

  
  let filaDelModal = '';

  let sumaCarro = 0;

 elementosCarrito.forEach((elemento) => {


 filaDelModal+=`
                <tr>
                <td>${elemento.servicio.id}</td>
                <td>${elemento.servicio.plan}</td>
                <td><input id="servicio-cantidad-${elemento.servicio.id}" type="number" value=${elemento.cantidad} min="1" max="1000" step="1"></td>
                <td>${elemento.servicio.precioNetoPlan}</td>
                <td>${elemento.servicio.precioNetoPlan*elemento.cantidad}</td>
                <td><button id="servicio-eliminar-${elemento.servicio.id}" type="button" class="btn btn-danger" ><i class="bi bi-trash"></i></button></td>
                </tr>


 `;

 contenedorCarrito.innerHTML = filaDelModal;  

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


}

generarCarrito();  


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