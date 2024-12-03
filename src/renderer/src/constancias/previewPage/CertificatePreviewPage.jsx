import { GenerarConstancia } from "../components/GenerarConstancia.component"
import { Module, PageContainer } from "../ConstanciasPage.styles"

const CertificatePreviewPage = () => {
  return (
    <>
    <PageContainer>
    <h1>Emision de constancias</h1>    
    <Module>
        <h2>Se ha emitido la constancia correctamente <span style={{color: 'red'}}>(Revise que todos los datos sean correctos)</span></h2>
        <hr />
        <div className="form-control mt2">
            <button className="blue-button">Descargar</button>
            <button className="green-button">Finalizar</button>
        </div>
        <div>
            <GenerarConstancia/>
        </div>
    </Module>
    </PageContainer>
    
    </>
  )
}

export default CertificatePreviewPage