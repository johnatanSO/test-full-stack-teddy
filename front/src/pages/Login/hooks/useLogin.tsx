import { useForm } from "react-hook-form"
import { ILogin, loginSchema } from "../interfaces/ILogin"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { loginService } from "../../../services/user/login/loginService"

export function useLogin() {
  const { changeUser } = useContext(UserContext)
  
  const { 
    register, 
    reset, 
    handleSubmit, 
    watch, 
    formState: { 
      isSubmitting 
    } 
  } = useForm<ILogin>({
    defaultValues: {
      name: ''
    },
    resolver: zodResolver(loginSchema)
  })

  async function onLogin(data: ILogin) {
    return await loginService({ name: data.name })
    .then(({ data }) => {
      changeUser(data)
      reset()
    })
    .catch((error) => {
      console.log('error', error)
    })
  }

  return {
    handleSubmit,
    register,
    onLogin,
    isSubmitting,
    name: watch('name')
  }
}