import style from "./ModalDeleteClient.module.scss";
import { ModalLayout } from "../../../../components/ModalLayout";
import { IClient } from "../../../../types/models/IClient";
import useDeleteClient from "../../hooks/useDeleteClient";

type Props = {
  open: boolean;
  clientToDelete: IClient | null;
  fetchData: () => void;
  handleClose: () => void;
};

export function ModalDeleteClient({
  open,
  handleClose,
  fetchData,
  clientToDelete,
}: Props) {
  const { handleSubmit, isSubmitting, onDeleteClient } = useDeleteClient({
    onClose: handleClose,
    fetchData,
    clientToDelete,
  });

  return (
    <ModalLayout
      onClose={handleClose}
      open={open}
      onSubmit={handleSubmit(onDeleteClient)}
      submitText="Excluir cliente"
      title="Excluir cliente"
      loading={isSubmitting}
    >
      <p className={style.text}>
        Você está preste a excluir o cliente:{" "}
        <b>{clientToDelete?.name || "--"}</b>
      </p>
    </ModalLayout>
  );
}
