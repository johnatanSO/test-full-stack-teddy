import { ReactNode, createContext, useEffect, useState } from 'react'
import { IUser } from '../types/models/IUser'
import { STORAGE_KEYS } from '../types/enums/STORAGE_KEYS'

interface UserContextComponentProps {
  children: ReactNode
}

interface UserContextInterface {
  userInfo: IUser | null
  changeUser: (data: IUser | null) => void
}

export const UserContext = createContext({} as UserContextInterface)

export function UserContextProvider({ children }: UserContextComponentProps) {
  const [userInfo, setUserInfo] = useState<IUser | null>(null)

  function changeUser(userData: IUser | null) {
    setUserInfo(userData)
    globalThis.localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData))
  }

  useEffect(() => {
    const userString = globalThis.localStorage.getItem(STORAGE_KEYS.USER)
    const userParsed = JSON.parse(userString || 'null')
    
    setUserInfo(userParsed)
  }, [])

  return (
    <UserContext.Provider
      value={{
        userInfo,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
