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
  
    if (number <= 20) return ones[number];
    if (number < 30) return "veinti" + ones[number - 20];
    if (number < 100) return tens[Math.floor(number / 10)] + (number % 10 ? " y " + ones[number % 10] : "");
    
    if (number === 100) return "cien";
    
    return hundreds[Math.floor(number / 100)] + (number % 100 ? " " + numberToWords(number % 100) : "");
  }
  
  export function getFormattedDateInWords(date) {
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