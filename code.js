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

let codCliente = Number(prompt("Hola, por favor ingrese su Código de cliente."));
let razSocial = prompt("Hola, por favor ingrese su Razón Social.");
let condIva = prompt("Hola, por favor ingrese su condicion frente al IVA.");
let plan = prompt("Hola, por favor ingrese su tipo de plan elegido.");


const nuevoCliente = new Cliente(codCliente, razSocial, condIva, plan);



class Servicio {
  constructor (plan, descripcion, precioNetoPlan){
    this.plan = plan;
    this.descripcion = descripcion;
    this.precioNetoPlan = precioNetoPlan;
    
  }
}

const planBasico = new Servicio("Básico", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias)." , 10000);

const planIntermedio = new Servicio("Intermedio", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables).", 20000);

const planPremium = new Servicio("Premium", "Liquidación de Impuestos (IVA, Ing. Brutos, Monotributo e Imp. a las Gcias). Más la Contabilidad de su empresa (Estados Contables, Auditoría Interna y Externa, Certificaciones Contables). Nos ocuparemos de resolver todo lo Laboral (Liquidación de sueldos y jornales, Liquidación de Boletas Sindicales). Por último este servicio Premium incluye además asesoramiento permamente en materia Financiera y Tributaria-Fiscal.", 30000);

const servicios = [];

const agregarServicios = () => {

servicios.push(planBasico);
servicios.push(planIntermedio);
servicios.push(planPremium);
console.log(servicios);


}

agregarServicios();


// Mostrar en cosola los Precios Netos del Array Servicios
servicios.forEach(Servicio => console.log(Servicio.precioNetoPlan));


// Generar nuevo Array incluyendo solamente los precios finales de cada plan.
const serviciosSoloConPrecioFinal = servicios.map(Servicio => Servicio.precioNetoPlan*1.21);
console.log(serviciosSoloConPrecioFinal);

// Generar nuevo Array incluyendo tipo de Plan y los precios finales de los mismos.
const serviciosConPrecioFinal = servicios.map(servicio => {
  return {
  
  Plan: servicio.plan,
  PrecioFinal: servicio.precioNetoPlan*1.21
  
}
});
console.log(serviciosConPrecioFinal);


// Buscar planes menores a $15000 en el Array de Precios con iva incluido.
const buscarPlanMenorA15K = serviciosConPrecioFinal.filter(servicio => servicio.PrecioFinal < 15000);
console.log(buscarPlanMenorA15K);



const generarArrayClientes = () => {

const carteraClientes = [];

console.log(carteraClientes);


carteraClientes.push(cliente1);
carteraClientes.unshift(cliente3);
carteraClientes.push(nuevoCliente);
carteraClientes.unshift(cliente2);

console.table(carteraClientes);



}


generarArrayClientes();
