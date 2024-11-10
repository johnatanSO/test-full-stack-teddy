import { Route, Routes } from "react-router-dom"
import { Clients } from "../pages/Clients"
import { SelectedClients } from "../pages/SelectedClients"
import { Login } from "../pages/Login"
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { LayoutProvider } from "./LayoutProvider"


export function RoutesHandler() {
  const { userInfo } = useContext(UserContext)

  const restrictLayout = !!userInfo

  return (
    restrictLayout ? (
      <LayoutProvider>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/selectedClients" element={<SelectedClients />} />
        </Routes>
      </LayoutProvider>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    )
  )
}