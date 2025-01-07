import { useEffect, useState } from 'react'
import { Module, PageContainer } from '../ConstanciasPage.styles'
import { MinimalTable } from './MinimalTable'

export const AllCertificates = () => {
  const [allCertificates, setAllCertificates] = useState([])
  const [error, setError] = useState(null)

  const getallCertificates = async () => {
    try {
      const response = await fetch('http://localhost:1234/constancias/')

      if (!response.ok) {
        throw new Error('Error al obtener las constancias')
      }

      const results = await response.json()
      if(!results.success){
        setError('No hay constancias para mostrar.')
      }else{
        setError(null)
        setAllCertificates(results.data) 

      }

    } catch (error) {
      console.error('Error al llamar a la API:', error)
    }
  }

  useEffect( () => {
    getallCertificates() 
  }, [])

  if (!allCertificates) {
    return <p>Cargando...</p>
  }

  return (
    <PageContainer>
      <h1>Listado de constancias emitidas</h1>
      <hr />
      <Module>
        <MinimalTable data={allCertificates} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Module>
    </PageContainer>
  )
}
