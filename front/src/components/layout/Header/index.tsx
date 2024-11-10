import style from './Header.module.scss'
import logoImage from '../../../assets/logo-teddy.svg'
import { NavLink } from 'react-router-dom'
import { useHeader } from './hooks/useHeader'
import menuBarsPathIcon from '../../../assets/icons/bars-icon.svg'

export function Header() {
  const { userInfo, handleLogout, pathname } = useHeader()

  return (
    <header className={style.headerContainer}>
      <button className={style.sidebarButton} type='button'>
        <img src={menuBarsPathIcon} alt="" />
      </button>

      <img className={style.logoIcon} alt="" src={logoImage} />

      <nav className={style.navContainer}>
        <ul>
          <li 
            className={
              pathname === '/' 
              ? style.active 
              : undefined
            }
          >
            <NavLink to="/">Clientes</NavLink>
          </li>

          <li 
            className={
              pathname === '/selectedClients' 
              ? style.active 
              : undefined
            }
          >
            <NavLink to="/selectedClients">Clientes selecionados</NavLink>
          </li>

          <li>
            <button 
              className={style.logoutButton}
              type='button' 
              onClick={handleLogout}
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>

      <span>
        Olá, <b>{userInfo?.name || '--'}!</b>
      </span>
    </header>
  )
}