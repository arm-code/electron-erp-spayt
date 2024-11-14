import { AppRoutes } from "./routes/AppRoutes"
import { NavBar } from "./UI/nav/NavBar"

export const App = () => {
  return (
    <>      
     <NavBar/>
      <AppRoutes/>      
    </>
  )
}

export default App
