import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

export const GetStudent = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const initialValues = {
    matricula: ''
  }

  const validationSchema = Yup.object({
    matricula: Yup.string()
    .required('Matricula requerida.')
    .matches(/^\d{14}$/, 'La matricula debe tener exactamente 14 dígitos.')
  })

  const handleSubmit = async (data) => {
    await checkStudentExist(data)
  }

  const checkStudentExist = async (data) => {
    const matricula = data.matricula
    console.log(matricula)
    try {
      const response = await fetch(`http://localhost:1234/estudiantes/${matricula}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('No se pudo encontrar el estudiante')
      }
      const results = await response.json()        
      console.log(results)
      if (!results.success) {

        setError('Estudiante no existe')
      } else {
        setError(null)
        console.log('Estudiante encon6rado!!!')
        navigate(`/student-info/${matricula}`)
      }
      
    } catch (error) {
      console.error(error)
      setError('No se pudo encontrar el estudiante!')
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
          <div className="form-control">
            <label htmlFor="matricula" className="label-primary">
              Ingrese la matricula del estudiante:
            </label>
            <div className="field-error-message">
              <Field name="matricula" placeholder="240802112233" className="field-primary" />
              <ErrorMessage name="matricula" component="span" style={{ color: 'red' }} />
            </div>

            <button type="submit" className="blue-button">
              Buscar estudiante
            </button>
          </div>
        </Form>
      </Formik>

      {/* Muestra mensaje de error si hay algún problema con la API */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}
