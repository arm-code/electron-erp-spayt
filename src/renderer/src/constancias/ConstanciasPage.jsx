import { motion } from 'framer-motion' // Importamos motion de framer-motion
import { Module, ModuleTab, PageContainer, TabsContainer } from './ConstanciasPage.styles'
import { GenerarConstancia } from './components/GenerarConstancia.component'
import { GetStudent } from './components/GetStudent.component'
import { AllCertificates } from './certificatesTable/AllCertificates'
import EmitCertificates from './emitCertificates/EmitCertificates'
import { useNavigate } from 'react-router-dom'

export const ConstanciasPage = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path); // Navega a la ruta especificada
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} // Configuración de la animación
    >
      <PageContainer>
        <h1>Modulo de constancias (seleccione una opción)</h1>
        <hr />

        <TabsContainer>
          <ModuleTab onClick={() => handleNavigation('/constancias-emitidas')}>
            <h1>Constancias emitidas</h1>
          </ModuleTab>
          <ModuleTab onClick={() => handleNavigation('/emitir-constancias')}>
            <h1>Emisión constancias</h1>
          </ModuleTab>
        </TabsContainer>
      </PageContainer>
    </motion.div>
  )
}
