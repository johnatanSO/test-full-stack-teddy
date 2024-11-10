import style from "./Header.module.scss";
import logoImage from "../../../assets/logo-teddy.svg";
import { NavLink } from "react-router-dom";
import { useHeader } from "./hooks/useHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  toggleSidebar: () => void;
};

export function Header({ toggleSidebar }: Props) {
  const { userInfo, handleLogout, pathname } = useHeader();

  return (
    <header className={style.headerContainer}>
      <button
        onClick={toggleSidebar}
        className={style.sidebarButton}
        type="button"
      >
        <FontAwesomeIcon icon={faBars} className={style.icon} />
      </button>

      <img className={style.logoIcon} alt="" src={logoImage} />

      <nav className={style.navContainer}>
        <ul>
          <li className={pathname === "/" ? style.active : undefined}>
            <NavLink to="/">Clientes</NavLink>
          </li>

          <li
            className={
              pathname === "/selectedClients" ? style.active : undefined
            }
          >
            <NavLink to="/selectedClients">Clientes selecionados</NavLink>
          </li>

          <li>
            <button
              className={style.logoutButton}
              type="button"
              onClick={handleLogout}
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>

      <span className={style.username}>
        Olá, <b>{userInfo?.name || "--"}!</b>
      </span>
    </header>
  );
}
