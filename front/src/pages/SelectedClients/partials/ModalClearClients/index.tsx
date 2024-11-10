import style from "./ModalClearClients.module.scss";
import { ModalLayout } from "../../../../components/ModalLayout";
import { useClearClients } from "../../hooks/useClearClients";
import { IClient } from "../../../../types/models/IClient";

type Props = {
  open: boolean;
  selectedClients: IClient[];
  fetchData: () => void;
  handleClose: () => void;
};

export function ModalClearClients({
  open,
  handleClose,
  selectedClients,
  fetchData,
}: Props) {
  const { handleSubmit, onClearClients, isSubmitting } = useClearClients({
    selectedClients,
    fetchData,
    onClose: handleClose
  });

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
