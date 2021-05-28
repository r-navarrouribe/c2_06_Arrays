const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

// nPacientes
const cantidadPacientes = pacientes.length;

// nMayoresEdad
const pacientesMayores = pacientes.filter(
  (paciente) => paciente.paciente.edad >= 18
);

const cantidadPacientesMayores = pacientesMayores.length;

// nHombresDiabeticos

const hombresDiabeticos = pacientes.filter(
  (paciente) => paciente.paciente.sexo === "H" && paciente.dieta === "Diabetes"
);

const cantidadHombresDiabeticos = hombresDiabeticos.length;

// totalDiasIngreso

const numeroTotalDiasIngreso = pacientes.reduce(
  (acumulador, paciente) => acumulador + paciente.diasIngresado,
  0
);

// mediaEdadMujeres

const cantidadMujeres = pacientes.filter(
  (paciente) => paciente.paciente.sexo === "M"
);

const EdadMujeresMedia = cantidadMujeres.reduce(
  (acumulador, paciente) => acumulador + paciente.paciente.edad,
  0
);

// Función para crear el objeto
const creadorObjetoFinal = (arrayPacientes) => {
  const objetoFinal = {
    nPacientes: cantidadPacientes,
    nMayoresEdad: cantidadPacientesMayores,
    nHombresDiabeticos: cantidadHombresDiabeticos,
    totalDiasIngreso: numeroTotalDiasIngreso,
    mediaEdadMujeres: EdadMujeresMedia / cantidadMujeres.length,
  };
  return objetoFinal;
};

console.log(creadorObjetoFinal(pacientes));
