import style from "./ModalClearClients.module.scss";
import { ModalLayout } from "../../../../components/ModalLayout";
import { useClearClients } from "../../hooks/useClearClients";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export function ModalClearClients({ open, handleClose }: Props) {
  const { handleSubmit, onClearClients, isSubmitting } = useClearClients();

  return (
    <ModalLayout
      submitText="Limpar"
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onClearClients)}
      title="Limpar clientes"
      loading={isSubmitting}
    >
      <p className={style.text}>Deseja mesmo limpar todos os clientes?</p>
    </ModalLayout>
  );
}
