import React from 'react'
import { motion } from 'framer-motion' // Importamos motion de framer-motion
import {
  FancyButton,
  HomeContainer,
  ModuleButton,
  ModuleContainer,
  Subtitle,
  Title
} from './Home.styles'

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} // Configuración de la animación
    >
      <HomeContainer>
        <Title>¡Bienvenido al ERP SPAyT!</Title>
        <Subtitle>
          "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito. Si amas lo
          que haces, tendrás éxito." ¡Recuerda que cada paso que das te acerca más a tus sueños! ✨
        </Subtitle>
        <FancyButton>¿Con cuál modulo vas a trabajar?</FancyButton>

        {/* Nuevo contenedor de botones de módulos */}
        <ModuleContainer>
          <ModuleButton to="/plantillas">Plantillas</ModuleButton>
          <ModuleButton to="/constancias">Contancias</ModuleButton>
          <ModuleButton to="/certificacion">Certificacion</ModuleButton>
          <ModuleButton to="/">Otros</ModuleButton>
        </ModuleContainer>
      </HomeContainer>
    </motion.div>
  )
}

export default Home
