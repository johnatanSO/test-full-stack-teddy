import { ReactNode } from "react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import '../styles/global.scss'

type Props = {
  children: ReactNode
}

export function LayoutProvider({ children }: Props) {
  return (
    <div className="layoutWrapper">
      <Header />

      {children}

      {/* <Footer /> */}
    </div>
  )
}