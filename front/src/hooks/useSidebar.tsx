import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { STORAGE_KEYS } from "../types/enums/STORAGE_KEYS";

export function useSidebar() {
  const { changeUser } = useContext(UserContext);

  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  function toggleSidebar() {
    setSidebarOpened(!sidebarOpened);
  }

  function logout() {
    changeUser(null)
    globalThis.localStorage.removeItem(STORAGE_KEYS.USER)
    navigate('/')
  }

  function handleNavigate(path: string) {
    toggleSidebar();
    navigate(path);
  }

  return {
    toggleSidebar,
    sidebarOpened,
    handleNavigate,
    logout,
    pathname,
  };
}
