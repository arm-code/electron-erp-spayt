import React from 'react'
import { FancyButton, HomeContainer, ModuleButton, ModuleContainer, Subtitle, Title } from './Home.styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Title>¡Bienvenido al ERP SPAyT!</Title>
      <Subtitle>
        "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito. Si amas lo que
        haces, tendrás éxito." ¡Recuerda que cada paso que das te acerca más a tus sueños! ✨
      </Subtitle>
      <FancyButton>¿Con cuál modulo vas a trabajar?</FancyButton>

      {/* Nuevo contenedor de botones de módulos */}
      <ModuleContainer>
        <ModuleButton to = '/plantillas' >Plantillas</ModuleButton>
        <ModuleButton to = '/constancias' >Contancias</ModuleButton>
        <ModuleButton to = '/certificacion' >Certificacion</ModuleButton>
        <ModuleButton to = '/' >Otros</ModuleButton>
      </ModuleContainer>
    </HomeContainer>
  )
}

export default Home
