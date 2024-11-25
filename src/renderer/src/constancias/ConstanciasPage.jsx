import { motion } from 'framer-motion' // Importamos motion de framer-motion
import { Module, PageContainer } from './ConstanciasPage.styles'
import { GenerarConstancia } from './components/GenerarConstancia.component'

export const ConstanciasPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} // Configuración de la animación
    >
      <PageContainer>
        <h1>Constancias</h1>
        <hr />
        <Module>
          <GenerarConstancia />
        </Module>
      </PageContainer>
    </motion.div>
  )
}
