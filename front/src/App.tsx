import { BrowserRouter } from "react-router-dom"
import { UserContextProvider } from "./context/userContext"
import { RoutesHandler } from "./providers/RouterProvider"


export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <RoutesHandler />
      </UserContextProvider>
    </BrowserRouter>
  )
}
