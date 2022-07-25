import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./ui/components/Navbar"

export const StarWarsApp = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}
