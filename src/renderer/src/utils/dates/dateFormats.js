export const getCurrentDateFormatted = () => {
  // type date: DD MM (with letters) YYYY

  const currentDate = new Date()

  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]

  const day = currentDate.getDate()
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  // Formatear la fecha en el formato deseado
  const formattedDate = `${day} de ${month} del ${year}`
  return formattedDate
}


export const formatDateToYYYYMMDD = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const formattedDate = (inputDate) => {
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ];

  // Crear la fecha con una zona horaria que no afecte el día
  const date = new Date(inputDate + 'T00:00:00');  // Agregar la hora para evitar zona horaria
  if (isNaN(date.getTime())) {
    throw new Error('La fecha proporcionada no es válida.');
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Formatear la fecha en el formato deseado
  return `${day} de ${month} del ${year}`;
};


export const getFutureDateByMonths = (nMonth) => {
  const currentDate = new Date() // Fecha actual
  currentDate.setMonth(currentDate.getMonth() + nMonth) // Sumar 3 meses

  // Arreglo con los nombres de los meses
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]

  // Obtener el día, el mes y el año
  const day = currentDate.getDate()
  const month = months[currentDate.getMonth()] // Los meses van de 0 a 11
  const year = currentDate.getFullYear()

  // Formatear la fecha en el formato deseado
  return `${day} de ${month} de ${year}`
}

function numberToWords(number) {
  const ones = [
    "", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", 
    "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", 
    "dieciocho", "diecinueve", "veinte"
  ];
  
  const tens = [
    "", "", "veinti", "treinta", "cuarenta", "cincuenta", "sesenta", 
    "setenta", "ochenta", "noventa"
  ];

  const hundreds = [
    "", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", 
    "seiscientos", "setecientos", "ochocientos", "novecientos"
  ];

  if (number === 0) return "cero";

  if (number <= 20) return ones[number];
  if (number < 30) return "veinti" + ones[number - 20];
  if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 ? " y " + ones[number % 10] : "");

  if (number === 100) return "cien";
  if (number < 1000) {
    return hundreds[Math.floor(number / 100)] + (number % 100 ? " " + numberToWords(number % 100) : "");
  }

  if (number < 1000000) {
    const thousands = Math.floor(number / 1000);
    const remainder = number % 1000;

    const thousandsInWords = thousands === 1 ? "mil" : numberToWords(thousands) + " mil";
    const remainderInWords = remainder ? " " + numberToWords(remainder) : "";

    return thousandsInWords + remainderInWords;
  }

  throw new Error("El número excede el rango soportado (0 - 999,999).");
}
  
  export function getFormattedDateInWords(date) {
    date = new Date();
    // Arreglo con los nombres de los meses
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio", 
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    // Obtener el día, el mes y el año de la fecha proporcionada
    const day = date.getDate();
    const month = months[date.getMonth()]; // Los meses van de 0 a 11
    const year = date.getFullYear();
  
    // Convertir el día y el año a palabras
    const dayInWords = numberToWords(day);
    const yearInWords = numberToWords(year);
  
    // Formatear la fecha en el formato deseado
    return `A los ${dayInWords} días del mes de ${month} del ${yearInWords}`;
  }
  
  //FALTO LA LLAMADA PARA ESTA NUEVA FECHA FORMATEADA