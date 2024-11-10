import style from "./Sidebar.module.scss";
import logoImagePath from "../../../assets/logo-teddy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faHome,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  open: boolean;
  handleNavigate: (path: string) => void;
  logout: () => void;
  pathname: string;
  toggleSidebar: () => void;
};

export function Sidebar({
  open,
  toggleSidebar,
  handleNavigate,
  logout,
  pathname,
}: Props) {
  return (
    <>
      {open && (
        <div onClick={toggleSidebar} className={style.overlay}>
          <aside
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={style.sidebarContainer}
          >
            <div className={style.logoContainer}>
              <img alt="" src={logoImagePath} />

              <button
                onClick={toggleSidebar}
                type="button"
                className={style.closeSidebarButton}
              >
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className={style.icon}
                />
              </button>
            </div>

            <nav>
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      handleNavigate("/");
                    }}
                    className={pathname === "/home" ? style.active : undefined}
                  >
                    <FontAwesomeIcon icon={faHome} className={style.icon} />
                    Home
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      handleNavigate("/");
                    }}
                    className={pathname === "/" ? style.active : undefined}
                  >
                    <FontAwesomeIcon icon={faUser} className={style.icon} />
                    Clientes
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      handleNavigate("/selectedClients");
                    }}
                    className={
                      pathname === "/selectedClients" ? style.active : undefined
                    }
                  >
                    <FontAwesomeIcon icon={faUsers} className={style.icon} />
                    Clientes selecionados
                  </button>
                </li>
              </ul>
            </nav>

            <button
              className={style.logoutButton}
              type="button"
              onClick={logout}
            >
              Sair
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
