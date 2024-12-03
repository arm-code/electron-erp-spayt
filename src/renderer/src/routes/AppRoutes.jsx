import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'
import { PlantillasPage } from '../plantillas/PlantillasPage'
import { ConstanciasPage } from '../constancias/ConstanciasPage'
import { CertificacionPage } from '../certificacion/CertificacionPage'
import { StudentInformationPage } from '../constancias/studentInformationPage/StudentInformationPage'
import CertificatePreviewPage from '../constancias/previewPage/CertificatePreviewPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plantillas" element={<PlantillasPage />} />
      <Route path="/constancias" element={<ConstanciasPage />} />
      <Route path="/certificacion" element={<CertificacionPage />} />
      <Route path="/student-info/:matricula" element={<StudentInformationPage />} />
      <Route path="/preview" element={<CertificatePreviewPage />} />
    </Routes>
  )
}
