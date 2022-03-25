class paciente {
    constructor(nombre_recibido, dni_recibido, edad_recibida, primerDosis, segundaDosis, terceraDosis) {
        this.nombre = nombre_recibido;
        this.dni = parseInt(dni_recibido);
        this.edad = parseInt(dni_recibido);
        this.primerDosis = primerDosis;
        this.segundaDosis = segundaDosis;
        this.terceraDosis = terceraDosis;
    }
    imprimirPaciente() {
        return `paciente: ${this.nombre} DNI: ${this.dni} edad: ${this.edad} Primer Dosis: ${this.primerDosis} Segunda Dosis: ${this.segundaDosis} Tercera Dosis: ${this.terceraDosis} `;
    }
}
let pacientes = [];
function crearPaciente() {
    const nombre = prompt("Ingresa el Nombre y Apellido");
    const dni = prompt("Ingresa el DNI");
    const edad = prompt("Ingresa la edad");
    const primerDosis = prompt("Ingresa Nombre Primer Dosis");
    const  segundaDosis= prompt("Ingresa Nombre Segunda Dosis");
    const  terceraDosis= prompt("Ingresa Nombre Tercera Dosis");

    return new paciente(nombre, dni, edad, primerDosis, segundaDosis, terceraDosis);
}

let continuar = confirm("Desea cargar más pacientes?");
while (continuar) {
    let paciente = crearPaciente();
    console.log("Datos del paciente: ", paciente.imprimirPaciente());
    pacientes.push(paciente);

    continuar = confirm("Desea cargar más pacientes?");
}

console.table(pacientes);
