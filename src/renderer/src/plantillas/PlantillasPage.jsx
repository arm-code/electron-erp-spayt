import React from 'react'
import { motion } from 'framer-motion' // Importamos motion de framer-motion

export const PlantillasPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} // Configuración de la animación
    >
      <h1>Plantillas</h1>
    </motion.div>
  )
}
