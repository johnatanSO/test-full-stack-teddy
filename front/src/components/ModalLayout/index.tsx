import style from "./ModalLayout.module.scss";
import { ReactNode } from "react";
import { Loading } from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
    <div onClick={onClose} className={style.overlay}>
      <form
        onClick={(event) => {
          event.stopPropagation();
        }}
        onSubmit={onSubmit}
      >
        <header>
          <h3>{title || "title"}</h3>

          <button onClick={onClose} type="button">
            <FontAwesomeIcon icon={faXmark} className={style.icon} />
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
