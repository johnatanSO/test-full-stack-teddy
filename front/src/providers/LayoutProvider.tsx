import { ReactNode } from "react";
import { Header } from "../components/layout/Header";
import "../styles/global.scss";
import { Sidebar } from "../components/layout/Sidebar";
import { useSidebar } from "../hooks/useSidebar";

type Props = {
  children: ReactNode;
};

export function LayoutProvider({ children }: Props) {
  const { sidebarOpened, toggleSidebar, handleNavigate, logout, pathname } =
    useSidebar();

  return (
    <div className="layoutWrapper">
      <Header toggleSidebar={toggleSidebar} />

      <Sidebar
        handleNavigate={handleNavigate}
        logout={logout}
        pathname={pathname}
        open={sidebarOpened}
        toggleSidebar={toggleSidebar}
      />

      {children}
    </div>
  );
}
