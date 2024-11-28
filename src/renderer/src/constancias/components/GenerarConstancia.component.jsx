import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { generarConstanciaTermino } from '../../utils/generarConstancias/generarConstanciaTermino'
import { useState } from 'react'
import { getCurrentDateFormatted } from '../../utils/dates/dateFormats'

export const GenerarConstancia = ({student}) => {
  const [pdfUrl, setPdfUrl] = useState(null)

  const initialValues = {
    tipoConstancia: '',    
    encargadoOficina: ''
  }

  const validationSchema = Yup.object({
    tipoConstancia: Yup.string().required('Selecciona el tipo de constancia.'),    
    encargadoOficina: Yup.string().required('Seleccione el encargado de la oficina.')
  })

  const handleSubmit = (data) => {
    console.log('generando constancia...')
    const date = getCurrentDateFormatted()
    const dataStudent = {...data, student, date}
    console.log(dataStudent)

    // Guardar la URL en el estado
    setPdfUrl(generarConstanciaTermino(dataStudent));
  }

  const descargarPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'constancia.pdf';
    link.click();
    // Liberar memoria después de descargar
    URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="tipoConstancia">Tipo de constancia:</label>
            <Field as="select" name="tipoConstancia">
              <option value="">Selecciona...</option>
              <option value="student">Constancia de estudios</option>
              <option value="graduation">Constancia de término de estudios</option>
            </Field>
            <ErrorMessage name="tipoConstancia" component="div" style={{ color: 'red' }} />
          </div>          

          <div>
            <label htmlFor="encargadoOficina">Encargado de la oficina:</label>
            <Field as="select" name="encargadoOficina">
              <option value="">Selecciona...</option>
              <option value="manager1">Encargado 1</option>
              <option value="manager2">Encargado 2</option>
            </Field>
            <ErrorMessage name="encargadoOficina" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Emitir Constancia</button>
        </Form>
      </Formik>

      {pdfUrl && (
        <div style={{ marginTop: '20px', overflow: 'auto' }}>
          <h2>Vista Previa</h2>
          <iframe
            src={pdfUrl}
            title="Vista Previa de Constancia"
            style={{ width: '100%', height: '1000px', border: '1px solid #ccc' }}
          ></iframe>
          <button onClick={descargarPDF} style={{ marginTop: '10px' }}>
            Descargar Constancia
          </button>
        </div>
      )}
    </>
  )
}
