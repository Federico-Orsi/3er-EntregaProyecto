// let edad = parseInt(prompt("Hola, por favor ingrese su Edad para el Registro."));


// function edadRegistro() {
  


// if ((edad <= 0) || (isNaN(edad) == true)) {
//   alert("Dato no válido. Solo pueden ingresarse números enteros superiores a cero.");
// }



// else if ((edad > 0) && (edad < 18 )){
//     alert("Eres menor de edad. Lo sentimos, aún no puedes registarte en nuestro Sitio.");
// } 

 
// else {
//     alert("Gracias por registrarte en nuestro sitio. Te damos la Bienvenida a nuestra Comunidad Profesional. Presioná Enter para continuar.");
// }

// }

// edadRegistro();


// if (edad >= 18) {
  
//   pedirDatosCliente();
  
// }



// function pedirDatosCliente() {
  
//   let continuarSalir = prompt("Continuemos, presione cualquier tecla para avanzar. O escriba ESC para salir");  

//   if (continuarSalir == "ESC") {
//     alert("Gracias, hasta pronto.");
//   } 

  

//   while (continuarSalir != "ESC") {

  
  
//   suNombre= prompt("Por favor ingrese su Nombre completo.");
//   suApellido= prompt("Por favor ingrese su Apellido completo.");
//   suMail= prompt("Por favor ingrese su casilla de e-mail.");
//   suCelular= prompt("Por favor ingrese su Nro de Celular con código de área.");

//   console.log("A continuación le mostramos el resumen de sus datos personales: ");

//   console.log("Su nombre es: " + suNombre);
//   console.log("Su Apellido es: " + suApellido);  
//   console.log("Su e-mail es: " + suMail);
//   console.log("Su Nro de celular es: " + suCelular);
  
//   continuarSalir = prompt("Favor revisar que todos sus datos mostrados en consola estén correctos. Si está todo OK, presione cualquier tecla para continuar. De lo contrario ingrese ESC para salir y cargue sus datos nuevamente.");

//   if (continuarSalir != "ESC") {
//     elegirPlan();
//     continuarSalir = prompt("Por favor revise su casilla de correo y valide su registro con el link enviado. Luego escriba ESC para salir. Si no recibió ningún e-mail, favor presione cualquier tecla y complete el formulario nuevamente.");
//   }
 

  
// }

// }




// function elegirPlan() {



// let planElegido = prompt("Favor indicar el tipo de Plan elegido, según las siguientes opciones: Plan Básico, Plan Intermedio o Plan Premium. (tenga en cuenta que el sistema no reconoce si ingresa un dato con tilde).")

// let precioNetoPlanBasico = 10000
// let precioNetoPlanIntermedio = 20000
// let precioNetoPlanPremium = 30000
// let planBasico = "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias)."
// let planIntermedio = planBasico + " Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables)."
// let planPremium = planIntermedio + " Nos ocuparemos de resolver todo lo Laboral (Liquidación de sueldos y jornales, Liquidación de Boletas Sindicales). Por último este servicio Premium incluye además asesoramiento permamente en materia Financiera y Tributaria-Fiscal."
// let precioFinalPlanBasico = calcularPrecioFinal(precioNetoPlanBasico) 
// let precioFinalPlanIntermedio = calcularPrecioFinal(precioNetoPlanIntermedio) 
// let precioFinalPlanPremium = calcularPrecioFinal(precioNetoPlanPremium) 



// if (planElegido == "Plan Basico" || planElegido == "plan basico" || planElegido == "PLAN BASICO" ) {
//   alert("Su plan incluye: " +planBasico+ " El valor mensual del mismo es $"+precioNetoPlanBasico+" + iva. Presioná cualquier tecla para conocer tu precio final a abonar.");
//   alert("Precio Final Plan Básico: $"+precioFinalPlanBasico);
// } else if (planElegido == "Plan Intermedio" || planElegido == "plan intermedio" || planElegido == "PLAN INTERMEDIO" ) {
//   alert("Su plan incluye: " +planIntermedio+ " El valor mensual del mismo es $"+precioNetoPlanIntermedio+" + iva. Presioná cualquier tecla para conocer tu precio final a abonar.");
//   alert("Precio Final Plan Intermedio: $"+precioFinalPlanIntermedio);
// }
// else if (planElegido == "Plan Premium" || planElegido == "plan premium" || planElegido == "PLAN PREMIUM") {
//   alert("Su plan incluye: " +planPremium+ " El valor mensual del mismo es $"+precioNetoPlanPremium+" + iva. Presioná cualquier tecla para conocer tu precio final a abonar.");
//   alert("Precio Final Plan Premium: $"+precioFinalPlanPremium);
// }




// }



// function calcularPrecioFinal(precioNeto) {
//   let precioFinal = precioNeto*1.21
//   return precioFinal
// }


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
  constructor (ID, plan, descripcion, precioNetoPlan){
    this.ID = ID;
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


// Mostrar en cosola los Precios Netos del Array Servicios
// servicios.forEach(Servicio => console.log(Servicio.precioNetoPlan));


// Generar nuevo Array incluyendo solamente los precios finales de cada plan.
// const serviciosSoloConPrecioFinal = servicios.map(Servicio => Servicio.precioNetoPlan*1.21);
// console.log(serviciosSoloConPrecioFinal);

// Generar nuevo Array incluyendo tipo de Plan y los precios finales de los mismos.
// const serviciosConPrecioFinal = servicios.map(servicio => {
//   return {
  
//   Plan: servicio.plan,
//   PrecioFinal: servicio.precioNetoPlan*1.21
  
// }
// });
// console.log(serviciosConPrecioFinal);


// Buscar planes menores a $15000 en el Array de Precios con iva incluido.
// const buscarPlanMenorA15K = serviciosConPrecioFinal.filter(servicio => servicio.PrecioFinal < 15000);
// console.log(buscarPlanMenorA15K);



// const generarArrayClientes = () => {

// const carteraClientes = [];

// console.log(carteraClientes);


// carteraClientes.push(cliente1);
// carteraClientes.unshift(cliente3);
// // carteraClientes.push(nuevoCliente);
// carteraClientes.unshift(cliente2);

// console.table(carteraClientes);



// }

// generarArrayClientes();


// Agregar Elementos al DOM:

// const crearElemento = () => {

// let articleCreadoConJs = document.createElement("article");
// articleCreadoConJs.className = "d-flex justify-content-around";
// articleCreadoConJs.innerHTML = `
//   <div class="card mt-4 mb-4" style="width: 18rem;">
//   <img src="../img/cup-of-coffee.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Plan ${servicios[0].plan}</h5>
//     <p class="card-text">${servicios[0].descripcion}</p>
//     <p id="onClickAlertBasico" class="btn btn-primary">${servicios[0].precioNetoPlan}</p>
//   </div>
//   </div>
// `;  


// let contenedorCard = document.getElementById("sectionCard");
// contenedorCard.append(articleCreadoConJs);
// contenedorCard.style.background = "yellow";

// let eventoPrueba = document.getElementById("onClickAlertBasico");
//    eventoPrueba.onclick =()=> {
//    confirm("Usted seleccionó el Plan Básico.");
//    }



// }

// crearElemento();



// Agarrar Elementos del HTML y modificarlos con JS:

// const modificarElemento = () => {

// let articleAgarradoConJs = document.getElementById("articleCardPlanIntermedio");
// articleAgarradoConJs.className = "d-flex justify-content-around";
// articleAgarradoConJs.innerHTML = `
//   <div class="card mt-4 mb-4" style="width: 18rem;">
//   <img src="../img/cup-of-coffee.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Plan ${servicios[1].plan}</h5>
//     <p class="card-text">${servicios[1].descripcion}</p>
//     <p id="onClickAlert" class="btn btn-primary">${servicios[1].precioNetoPlan}</p>
//   </div>
//   </div>
// `;

// let eventoPrueba = document.getElementById("onClickAlert");
// eventoPrueba.onclick = () => {
//    confirm("Usted seleccionó el Plan Intermedio.");
// }

// }

// modificarElemento();

// const agarrarYGenerarPlanPremium = () => {

//   let articleAgarradoConJs = document.getElementById("articleCardPlanPremium");
//   articleAgarradoConJs.className = "d-flex justify-content-around";
//   articleAgarradoConJs.innerHTML = `
//     <div class="card mt-4 mb-4" style="width: 18rem;">
//     <img src="../img/cup-of-coffee.jpg" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Plan ${servicios[2].plan}</h5>
//       <p class="card-text">${servicios[2].descripcion}</p>
//       <a id="onClickAlertPremium" class="btn btn-primary">${servicios[2].precioNetoPlan}</a>
//     </div>
//     </div>
//   `;  

//   let eventoPrueba = document.getElementById("onClickAlertPremium");
//    eventoPrueba.onclick =()=> {
//    confirm("Usted seleccionó el Plan Premium.");
//    }

//   }
  
//   agarrarYGenerarPlanPremium();



const vaciarConJs = () => {

  let dejarVacio = document.getElementById("dejarVacioConJs"); 
  dejarVacio.innerHTML = "";

}
 
vaciarConJs();


let mirror = document.getElementById("mirror");
mirror.innerText = "Mirror: este Input mostrará debajo la info que se le ingrese."

let inputtPrueba = document.getElementById("inputPrueba");


inputtPrueba.oninput = () => {

inputtPrueba.value;  
let parrafo = document.getElementById("parrafoPrueba");
parrafo.innerHTML = `${inputtPrueba.value}`;

}

// Servicios agregados dinamicamente:

let planesAplicandoForOf = document.getElementById("planesAplicandoForOf");

const aplicarForOfAPlanes = () => {

  for (const servicio of servicios) {
  

    planesAplicandoForOf.className = "d-flex justify-content-around";
    planesAplicandoForOf.innerHTML += `
      <div class="card mt-4 mb-4" style="width: 18rem;">
      <img src="../img/cup-of-coffee.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Plan ${servicio.plan}</h5>
        <p class="card-text">${servicio.descripcion}</p>
        <p id="planDinamizado${servicio.ID}" class="btn btn-primary">${servicio.precioNetoPlan}</p>
      </div>
      </div>
    `;

  }

  // Boton que pushea Elementos al Carrito y activa la funcion GenerarCarrito!!

  servicios.forEach(servicio => {
    
    let eventoPrueba = document.getElementById(`planDinamizado${servicio.ID}`);
    eventoPrueba.onclick = () => {
       confirm(`Usted seleccionó el Plan ${servicio.plan}.`);
       
       let elementoCarrito = new ElementoCarrito(servicio, 1);
       elementosCarrito.push(elementoCarrito) ;
       
       generarCarrito();

    }

  });
  
  
  }
  
  aplicarForOfAPlanes();

  
  let contenedorCarrito = document.getElementById("contenedorFilaCarrito");
  let modalFooter = document.getElementById("footerModal");


  const generarCarrito = () => {

  let filaDelModal = '';

  let sumaCarro = 0;

elementosCarrito.forEach((elemento) => {


filaDelModal+=`
                <tr>
                <td>${elemento.servicio.ID}</td>
                <td>${elemento.servicio.plan}</td>
                <td><input id="servicio-cantidad-${elemento.servicio.ID}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1"> </input></td>
                <td>${elemento.servicio.precioNetoPlan}</td>
                <td>${elemento.servicio.precioNetoPlan*elemento.cantidad}</td>
                <td><button id="servicio-eliminar-${elemento.servicio.ID}" type="button" class="btn btn-danger" ><i class="bi bi-trash"></i></button></td>
                </tr>


`;

contenedorCarrito.innerHTML = filaDelModal;  

sumaCarro+=elemento.servicio.precioNetoPlan*elemento.cantidad;

let inputCantidadProducto = document.getElementById(`servicio-cantidad-${elemento.servicio.ID}`);

inputCantidadProducto.onchange = () => {

  elemento.cantidad = inputCantidadProducto.value;
  
  generarCarrito();
}


});

if (elementosCarrito.length == 0){
  modalFooter.innerHTML = `
  <th scope="row" colspan="5"> Carrito Vacío - Comience su Compra. </th>
  `;
} else{
  modalFooter.innerHTML = `
  <th scope="row" colspan="5"> El Total de su Compra es: $${sumaCarro} </th>
  `;
}


}
