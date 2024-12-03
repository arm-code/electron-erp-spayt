import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { generarConstanciaTermino } from '../../utils/generarConstancias/generarConstanciaTermino'
import { generarConstanciaEstudiante } from '../../utils/generarConstancias/generarConstanciaEstudiante'
import { useState } from 'react'
import { getCurrentDateFormatted, getFormattedDateInWords } from '../../utils/dates/dateFormats'

export const GenerarConstancia = ({ student }) => {
  const [pdfUrl, setPdfUrl] = useState(null)
  const [isGraduation, setIsGraduation] = useState(false)

  const initialValues = {
    tipoConstancia: '',
    encargadoOficina: '',
    fechaEntregaCertificado: ''
  }

  const validationSchema = Yup.object({
    tipoConstancia: Yup.string().required('Selecciona el tipo de constancia.'),
    encargadoOficina: Yup.string().required('Seleccione el encargado de la oficina.'),
    fechaEntregaCertificado: Yup.string().when('tipoConstancia', (tipoConstancia, schema) => {
      return tipoConstancia === 'graduation'
        ? schema.required('La fecha de graduación es obligatoria.')
        : schema;
    }),
  });
  

  const handleTypeConstanciaChange = (e, setFieldValue) => {
    const selectedValue = e.target.value
    setFieldValue('tipoConstancia', selectedValue)
    setIsGraduation(selectedValue === 'graduation')
  }

  const handleSubmit = (data) => {
    const date = getCurrentDateFormatted()
    const dateInWords = getFormattedDateInWords(date)
    const dataStudent = { ...data, student, date, dateInWords }
    switch (data.tipoConstancia) {
      case 'student': {
        console.log(dataStudent)
        // Guardar la URL en el estado
        setPdfUrl(generarConstanciaEstudiante(dataStudent))
        break
      }
      case 'graduation': {
        // Guardar la URL en el estado
        setPdfUrl(generarConstanciaTermino(dataStudent))
        break
      }

      default:
        console.warn('Tipo de constancia no válido:', data.tipoConstancia)
        break
    }
  }

  const descargarPDF = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'constancia.pdf'
    link.click()
    // Liberar memoria después de descargar
    URL.revokeObjectURL(pdfUrl)
    setPdfUrl(null)
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({setFieldValue}) => (
        <Form>
          <div>
            <label htmlFor="tipoConstancia">Tipo de constancia:</label>
            <Field as="select" name="tipoConstancia" onChange={ (e) => handleTypeConstanciaChange(e, setFieldValue)}>
              <option value="">Selecciona...</option>
              <option value="student">Constancia de estudios</option>
              <option value="graduation">Constancia de término de estudios</option>
            </Field>
            <ErrorMessage name="tipoConstancia" component="div" style={{ color: 'red' }} />
          </div>

          {isGraduation && (
            <div>
              <label htmlFor="fechaEntregaCertificado">Fecha de entrega de certificado: </label>
              <Field type='date' name='fechaEntregaCertificado'></Field>
              <ErrorMessage name='fechaEntregaCertificado' component='span' style={{color: 'red'}}/>
            </div>
          )}

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
        )}
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
