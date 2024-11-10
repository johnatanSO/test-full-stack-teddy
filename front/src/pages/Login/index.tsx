import { Loading } from "../../components/Loading"
import { useLogin } from "./hooks/useLogin"
import style from './Login.module.scss'

export function Login() {
  const { 
    onLogin, 
    handleSubmit, 
    register, 
    isSubmitting, 
    name, 
  } = useLogin()

  return (
    <main className={style.pageContainer}>
      <form onSubmit={handleSubmit(onLogin)}>
        <h2>Olá, seja bem vindo!</h2>

        <input 
          {...register('name', { required: true })} 
          className={style.inputName} 
          placeholder="Digite o seu nome:"
        />

        <button 
          type="submit" 
          className={style.submitButton} 
          disabled={isSubmitting || !name}
        >
          {isSubmitting ? (
            <Loading />
          ) : (
            'Entrar'
          )}
        </button>
      </form>
    </main>
  )
}