import style from "./ModalCreateClient.module.scss";
import { ModalLayout } from "../../../../components/ModalLayout";
import { useCreateClient } from "../../hooks/useCreateClient";

type Props = {
  open: boolean;
  fetchData: () => void;
  handleClose: () => void;
};

export function ModalCreateClient({ open, handleClose, fetchData }: Props) {
  const { handleSubmit, isSubmitting, onCreateNewClient, register } =
    useCreateClient({ onClose: handleClose, fetchData });

  return (
    <ModalLayout
      onClose={handleClose}
      open={open}
      onSubmit={handleSubmit(onCreateNewClient)}
      submitText="Criar cliente"
      title="Criar cliente:"
      loading={isSubmitting}
    >
      <div className={style.fields}>
        <input
          type="text"
          className={style.input}
          {...register("name")}
          placeholder="Digite o nome:"
        />

        <input
          className={style.input}
          type="number"
          {...register("salary", { valueAsNumber: true })}
          placeholder="Digite o salário:"
        />

        <input
          type="number"
          className={style.input}
          {...register("companyValue", { valueAsNumber: true })}
          placeholder="Digite o valor da empresa:"
        />
      </div>
    </ModalLayout>
  );
}
