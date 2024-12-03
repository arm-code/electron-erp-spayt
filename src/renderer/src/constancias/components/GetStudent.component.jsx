import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { GenerarConstancia } from './GenerarConstancia.component'

export const GetStudent = () => {
  const [student, setStudent] = useState(null)
  const [error, setError] = useState(null) // Para manejar errores de la API

  const initialValues = {
    matricula: ''
  }

  const validationSchema = Yup.object({
    matricula: Yup.number().required('Matricula requerida.')
  })

  const handleSubmit = async (data, { resetForm }) => {
    console.log(data)
    await getStudent(data, resetForm)
  }

  const getStudent = async (data, resetForm) => {
    try {
      const response = await fetch('http://localhost:3000/api/estudiante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('No se pudo encontrar el estudiante')
      }

      const result = await response.json()
      setStudent(result)
      setError(null) // Limpiar el error si la API responde correctamente
      resetForm() // Limpiar el formulario después de la búsqueda exitosa
    } catch (error) {
      console.error(error)
      setError('No se pudo encontrar el estudiante!')
      setStudent(null) // Limpiar el estado de student si hay un error
    }
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="matricula">Ingrese la matricula del estudiante:</label>
            <Field name="matricula" placeholder="240802112233" />
            <ErrorMessage name="matricula" component="span" style={{ color: 'red' }} />
            <button type="submit">Buscar estudiante</button>
          </div>
        </Form>
      </Formik>

      {/* Muestra mensaje de error si hay algún problema con la API */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {student && (
        <div>
          <br />
          <h3>Datos del estudiante</h3>
          <hr />          
          <p><span>Nombre completo:</span> {student.Nombre} {student.Primer_Apellido} {student.Segundo_Apellido}
          </p>
          <p>
            <b>Matricula:</b> {student.Matricula}
          </p>
          <p>
            <b>CURP:</b> {student.CURP}
          </p>
          <hr />
          <p>Por favor confirme que los datos sean correctos</p>
          <hr />
          <GenerarConstancia student={student}/>
        </div>
      )}
    </>
  )
}
