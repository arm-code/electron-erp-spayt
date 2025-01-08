import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Module, PageContainer } from '../ConstanciasPage.styles'
import closeButton from '../../assets/icons/delete.png'
import checkButton from '../../assets/icons/check.png'
import { formatDateToYYYYMMDD } from '../../utils/dates/dateFormats'

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
        const response = await fetch(`http://localhost:1234/estudiantes/${matricula}`, {
          method: 'GET',                    
        })

        if (!response.ok) {
          throw new Error('No se pudo encontrar el estudiante')
        }

        const result = await response.json()
        console.log(result)
        setStudent(result.data[0])
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
            <p>Matricula:</p>
              <p>Nombre completo:</p>              
              <p>Fecha de ingreso:</p>
              <p>Área:</p>
            </div>
            <div>
            <p>{student.Matricula}</p>
              <p>
                {student.Nombre} {student.Primer_Apellido} {student.Segundo_Apellido}
              </p>
              
              <p>{formatDateToYYYYMMDD(student.Fecha_alta)}</p>
              <p>{student.Clave_Area}</p>
            </div>
          </div>

          {/* 
          NOS QUEDAMOS AQUI VIENDO COMO BUSCAR LA FECHA DE LA ULTIMA MATERIA APROBADA
          */}

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
