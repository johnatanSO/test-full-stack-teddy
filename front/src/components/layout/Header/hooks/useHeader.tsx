import { useContext } from "react"
import { UserContext } from "../../../../context/userContext"
import { useLocation, useNavigate } from "react-router-dom"
import { STORAGE_KEYS } from "../../../../types/enums/STORAGE_KEYS"

export function useHeader() {
  const { userInfo, changeUser } = useContext(UserContext)

  const navigate = useNavigate()
  const pathname = useLocation().pathname
  
  function handleLogout() {
    globalThis.localStorage.removeItem(STORAGE_KEYS.USER)
    changeUser(null)
    navigate('/')
  }

  return {
    userInfo,
    handleLogout,
    pathname,
  }
}