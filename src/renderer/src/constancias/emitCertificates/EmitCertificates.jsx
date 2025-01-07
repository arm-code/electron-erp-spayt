import { GetStudent } from '../components/GetStudent.component'
import { Module, PageContainer } from '../ConstanciasPage.styles'

const EmitCertificates = () => {
  return (
    <PageContainer>
      <h1>Emisión de constancias</h1>
      <hr />
      <Module>
        <GetStudent/>
      </Module>
    </PageContainer>
  )
}

export default EmitCertificates
