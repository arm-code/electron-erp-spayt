import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const GenerarConstancia = () => {
  const initialValues = {
    tipoConstancia: '',
    matricula: '',
    encargadoOficina: ''
  }

  const validationSchema = Yup.object({
    tipoConstancia: Yup.string().required('Selecciona el tipo de constancia.'),
    matricula: Yup.string()
      .required('Ingrese la matricula.')
      .matches(/^\d+$/, 'La matrícula debe ser numérica.'),
    encargadoOficina: Yup.string().required('Seleccione el encargado de la oficina.')
  })

  const handleSubmit = (data) => {
    console.log('generando constancia...')
  }

  const generarConstancia = () => {
    console.log('generando constancia...')
  }

  return (
    <Formik initialValues={initialValues} validationSchema={ validationSchema } onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="tipoConstancia">Tipo de constancia:</label>
            <Field as="select" name="tipoConstancia">
              <option value="">Selecciona...</option>
              <option value="student">Constancia de estudiante</option>
              <option value="graduation">Constancia de término de estudios</option>
            </Field>
            <ErrorMessage name="tipoConstancia" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="matricula">Matrícula del estudiante:</label>
            <Field type="text" name="matricula" />
            <ErrorMessage name="matricula" component="div" style={{ color: 'red' }} />
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

          <button type="submit" >
            Generar Constancia
          </button>
        </Form>
      )}
    </Formik>
  )
}
