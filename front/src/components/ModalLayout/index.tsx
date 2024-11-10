import style from "./ModalLayout.module.scss";
import { ReactNode } from "react";
import closeIconPath from "../../assets/icons/close-icon.svg";
import { Loading } from "../Loading";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  onSubmit: () => void;
  title: string;
  loading?: boolean;
  submitText: string;
};

export function ModalLayout({
  open,
  onClose,
  children,
  title,
  onSubmit,
  submitText,
  loading,
}: Props) {
  if (!open) return <></>;

  return (
    <div className={style.overlay}>
      <form onSubmit={onSubmit}>
        <header>
          <h3>{title || "title"}</h3>

          <button onClick={onClose} type="button">
            <img src={closeIconPath} alt="" />
          </button>
        </header>

        <div>{children}</div>

        <footer>
          <button disabled={loading} type="submit">
            {loading ? <Loading size={16} /> : submitText || "Confirmar"}
          </button>
        </footer>
      </form>
    </div>
  );
}
