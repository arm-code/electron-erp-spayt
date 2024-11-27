import { jsPDF } from 'jspdf'
import logos from './logos.jpg'
import spayt from './spayt.jpg'

export const generarConstancia = (data) => {
  const doc = new jsPDF({
    unit: 'pt',
    format: [612, 792]
  })

  // Márgenes en puntos
  const margenSuperior = 70.56 // 0.98"
  const margenIzquierdo = 99.36 // 1.38"
  const margenDerecho = 85.04 // 1.18"

  // imagen
  
  doc.addImage(logos, 'JPEG', 0,0, 612, 792 )
  doc.addImage(spayt, 'JPEG', margenIzquierdo,15, 100, 50 )

  // Texto que deseas agregar
  const textoLinea1 = 'Oficina Ciudad Juárez'
  const textoLinea2 = `No. de Oficio SPAyT OCJ ${data.numeroOficio} / ${data.year}`
  const textoLinea3 = `Cd. Juárez, Chih., a 28 de junio de 2024`

  const textContent = `La que suscribe, jefa de División del SUBSISTEMA DE PREPARATORIA ABIERTA Y TELEBACHILLERATO DEL ESTADO DE CHIHUAHUA en la entidad, dependiente de la Dirección General de Bachillerato de la Secretaría de Educación Pública con Clave 08EEX0001S, HACE CONSTAR que el (la) C.  ${ data.nombre } ${ data.primer_apellido } ${ data.segundo_apellido } Matrícula ${data.matricula}, ha iniciado ante estas oficinas su trámite de certificado de terminación de estudios de Preparatoria Abierta en el plan modular, de ser procedente la fecha de entrega es el día ${data.fecha_entrega}.`

  const textContent2 = `Se extiende la presente en Cd. Juárez, Chih. A los veintiocho días del mes de junio del dos mil veinticuatro, a solicitud del interesado (a) para los fines legales que correspondan. `

  // Calcular el ancho de las líneas de texto
  const anchoTexto1 =
    (doc.getStringUnitWidth(textoLinea1) * doc.internal.getFontSize()) / doc.internal.scaleFactor
  const anchoTexto2 =
    (doc.getStringUnitWidth(textoLinea2) * doc.internal.getFontSize()) / doc.internal.scaleFactor
  const anchoTexto3 =
    (doc.getStringUnitWidth(textoLinea3) * doc.internal.getFontSize()) / doc.internal.scaleFactor
  console.log(anchoTexto1, anchoTexto2, anchoTexto3)
 
  

  // Agregar las líneas de texto alineadas a la derecha
  doc.setFontSize(9)

  //doc.text(textoLinea1, posicionX1, posicionY)
  doc.text(textoLinea1, 612-margenDerecho, margenSuperior + 40, {align: 'right'})
  doc.text(textoLinea2, 612-margenDerecho, margenSuperior + 50, {align: 'right'}) // Desplazar 20 puntos hacia abajo para la segunda línea
  doc.text(textoLinea3, 612-margenDerecho, margenSuperior + 70, {align: 'right'}) // Desplazar otros 20 puntos hacia abajo para la tercera línea

  doc.setFontSize(12)
  doc.setFont('Helvetica', 'bold')
  doc.text('A QUIEN CORRESPONDA', margenIzquierdo, margenSuperior + 100)
  doc.text('PRESENTE.-', margenIzquierdo, margenSuperior + 110)

  doc.setFont('Helvetica', 'normal')
  //const textAjustado = doc.splitTextToSize(textContent,450)
  doc.text(textContent, margenIzquierdo,margenSuperior + 150, {align: 'justify', maxWidth: 612 - margenDerecho -margenIzquierdo})
  doc.text(textContent2, margenIzquierdo, margenSuperior + 300, {align: 'justify', maxWidth: 612 -margenDerecho -margenIzquierdo} )

  const pdfBlob = doc.output('blob')
  const pdfUrl = URL.createObjectURL(pdfBlob)
  return pdfUrl
  //doc.save('constanciaPDF')
}
