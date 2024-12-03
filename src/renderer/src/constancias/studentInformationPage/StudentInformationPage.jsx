import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Module, PageContainer } from '../ConstanciasPage.styles'
import closeButton from '../../assets/icons/delete.png'
import checkButton from '../../assets/icons/check.png'

export const StudentInformationPage = () => {
  const { matricula } = useParams()
  const [student, setStudent] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  
  const hasAtLeastOneApprovedSubject = () =>{
    console.log('Al menos una materia aprobada')
  }

  const isActiveInLastTwoMonths = () =>{
    console.log('Activo en los ultimos dos meses.')
  }

  const handleEmitCertificate = () =>{
    navigate('/preview')
  }

  const handleCancel = () => {
    navigate('/')
  }

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/estudiante', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ matricula: matricula })
        })

        if (!response.ok) {
          throw new Error('No se pudo encontrar el estudiante')
        }

        const result = await response.json()
        console.log(result)
        setStudent(result)
      } catch (err) {
        console.log(err)
      }
    }

    getStudent()
  }, [matricula])

  if (!student) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p style={{ color: red }}>{error}</p>
  }
  return (
    <>
      <PageContainer>
        <h1>Emision de constancias</h1>
        <Module>
          <h2>Datos del estudiante:</h2>
          <hr />
          <div className="form-control mt1 mb1">
            <div>
              <p>Nombre completo:</p>
              <p>Matricula:</p>
              <p>CURP:</p>
            </div>
            <div>
              <p>
                {student.Nombre} {student.Primer_Apellido} {student.Segundo_Apellido}
              </p>
              <p>{student.Matricula}</p>
              <p>{student.CURP}</p>
            </div>
          </div>

          <h2>Requisitos para emitir constancia:</h2>
          <hr />
          <div className="form-control-inverse mt1">
            <div className='form-control'>
              <img className="png-icon" src={checkButton} alt="icon" />
              <p>Al menos una materia aprobada.</p>
              {!error && <p style={{color: 'red'}}>(No cumple con este requisito.)</p>}
            </div>
            <div className='form-control'>
              <img className="png-icon" src={closeButton} alt="icon" />
              <p>Activo durante los utimos dos meses.</p>
              {!error && <p style={{color: 'red'}}>(No cumple con este requisito.)</p>}
            </div>
          </div>

          <div className='form-control mt2'>
            <button className='blue-button' onClick={handleEmitCertificate}>Emitir constancia</button>
            <button className='red-button' onClick={handleCancel}>Cancelar</button>
          </div>
        </Module>
      </PageContainer>
    </>
  )
}
