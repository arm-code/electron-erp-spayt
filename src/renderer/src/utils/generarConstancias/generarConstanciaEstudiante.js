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

  // Texto 
  const textoLinea1 = 'Oficina Ciudad Juárez'
  const textoLinea2 = `No. de Oficio SPAyT OCJ ${data.numeroOficio} / ${data.year}`
  const textoLinea3 = `Cd. Juárez, Chih., a ${data.fecha_emision}`

  const textContent = `La que suscribe, jefa de División del SUBSISTEMA DE PREPARATORIA ABIERTA Y TELEBACHILLERATO DEL ESTADO DE CHIHUAHUA en la entidad, dependiente de la Dirección General de Bachillerato de la Secretaría de Educación Pública con Clave 08EEX0001S, HACE CONSTAR que el (la) C.  ${data.nombre} ${data.primer_apellido} ${data.segundo_apellido} Matrícula ${data.matricula}, se encuentra inscrito en Preparatoria Abierta, desde ${data.mes_inscripcion} del ${data.year_inscripcion} apareciendo en su historial académico con 4${data.num_materias_aprobadas} materias acreditadas de un total de 22 del plan modular, la fecha de acreditación de la última materia presentada es en ${data.mes_ultima_acreditada} del ${data.year_ultima_acreditada}, por el periodo escolar del ${data.periodo_escolar}.`

  const textContent2 = `Se extiende la presente en Cd. Juárez, Chih. A los ${data.fecha_emision_con_letra}, a solicitud del interesado (a) para los fines legales que correspondan. `

  // Agregar las líneas de texto alineadas a la derecha
  doc.setFontSize(9)
  doc.setFont('Helvetica', 'italic')

  //doc.text(textoLinea1, posicionX1, posicionY)
  doc.text(textoLinea1, 612-margenDerecho, margenSuperior + 40, {align: 'right'})
  doc.text(textoLinea2, 612-margenDerecho, margenSuperior + 50, {align: 'right'}) 

  doc.setFontSize(9)
  doc.setFont('Helvetica', 'normal')
  doc.text(textoLinea3, 612-margenDerecho, margenSuperior + 70, {align: 'right'}) 

  doc.setFontSize(12)
  doc.setFont('Helvetica', 'bold')
  doc.text('A QUIEN CORRESPONDA', margenIzquierdo, margenSuperior + 100)
  doc.text('PRESENTE.-', margenIzquierdo, margenSuperior + 110)

  doc.setFont('Helvetica', 'normal')
  //const textAjustado = doc.splitTextToSize(textContent,450)
  doc.text(textContent, margenIzquierdo,margenSuperior + 150, {align: 'justify', maxWidth: 612 - margenDerecho -margenIzquierdo})
  doc.text(textContent2, margenIzquierdo, margenSuperior + 300, {align: 'justify', maxWidth: 612 -margenDerecho -margenIzquierdo} )

  doc.setFont('Helvetica', 'bold')
  doc.text('ATENTAMENTE', 612/2+margenDerecho-margenIzquierdo, margenSuperior + 400, {align: 'center' })
  doc.text('LIC. OLGA LIDIA CORONA CORTEZ.', 612/2+margenDerecho-margenIzquierdo, margenSuperior + 470, {align: 'center' })
  doc.text('RESPONSABLE DEL SUBSISTEMA DE PREPARATORIA ABIERTA', 612/2+margenDerecho-margenIzquierdo, margenSuperior + 490, {align: 'center' })
  doc.text('EN CD JUAREZ CHIH.', 612/2+margenDerecho-margenIzquierdo, margenSuperior + 510, {align: 'center' })

  doc.setFont('Helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('“2024, Año del Bicentenario de la fundación del estado de Chihuahua”', 612-margenDerecho-20, margenSuperior + 620, {align: 'right'})

  doc.setFont('Helvetica', 'normal')
  doc.setFontSize(7)
  doc.text('AV.16 de septiembre # 1232 Edif. San Carlos. Col Partido Romero Cd. Juárez, Chih.', 612-margenDerecho, margenSuperior + 640, {align: 'right'})
  doc.text('Tel. (656) 6-29-33-00 Ext. 55318 55213', 612/2+20, margenSuperior + 650, {align: 'left'})
  doc.text('www.spaytchihuahua.gob.mx', 612/2+35, margenSuperior + 660, {align: 'left'})

  doc.setFont('Helvetica', 'normal')
  doc.setFontSize(8)
  doc.text('CSHA/SCPA.', margenIzquierdo, margenSuperior + 580)

  const pdfBlob = doc.output('blob')
  const pdfUrl = URL.createObjectURL(pdfBlob)
  return pdfUrl
  //doc.save('constanciaPDF')
}
