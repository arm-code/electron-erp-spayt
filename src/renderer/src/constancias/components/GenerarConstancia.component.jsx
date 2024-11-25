import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const GenerarConstancia = () => {
  const initialValues = {
    tipoConstancia: '',
    matricula: '',
    erncargadoOficina: ''
  }

  const validationSchema = Yup.object({
    tipoConstancia: Yup.string().required('Selecciona el tipo de constancia.'),
    matricula: Yup.string()
      .required('Ingrese la matricula.')
      .matches(/^\d+$/, 'La matrícula debe ser numérica.'),
    erncargadoOficina: Yup.string().required('Seleccione el encargado de la oficina.')
  })

  const handleSubmit = (data) => {
    console.log('generando constancia...')
  }

  const generarConstancia = () => {
    console.log('generando constancia...')
  }

  return (
    <Formik initialValues={initialValues} validationSchema={{ validationSchema }} onSubmit={{}}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="certificateType">Tipo de constancia:</label>
            <Field as="select" name="certificateType">
              <option value="">Selecciona...</option>
              <option value="student">Constancia de estudiante</option>
              <option value="graduation">Constancia de término de estudios</option>
            </Field>
            <ErrorMessage name="certificateType" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="studentId">Matrícula del estudiante:</label>
            <Field type="text" name="studentId" />
            <ErrorMessage name="studentId" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="officeManager">Encargado de la oficina:</label>
            <Field as="select" name="officeManager">
              <option value="">Selecciona...</option>
              <option value="manager1">Encargado 1</option>
              <option value="manager2">Encargado 2</option>
            </Field>
            <ErrorMessage name="officeManager" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Generar Constancia
          </button>
        </Form>
      )}
    </Formik>
  )
}


