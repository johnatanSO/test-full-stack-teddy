import style from "./ModalCreateClient.module.scss";
import { ModalLayout } from "../../../../components/ModalLayout";
import useCreateClient from "../../hooks/useCreateClient";
import { IClient } from "../../../../types/models/IClient";

type Props = {
  open: boolean;
  clientDataToEdit: IClient | null;
  fetchData: () => void;
  handleClose: () => void;
};

export function ModalCreateClient({
  open,
  handleClose,
  fetchData,
  clientDataToEdit,
}: Props) {
  const {
    handleSubmit,
    isSubmitting,
    onCreateNewClient,
    register,
    errors,
    onUpdateClient,
  } = useCreateClient({ onClose: handleClose, fetchData, clientDataToEdit });

  return (
    <ModalLayout
      onClose={handleClose}
      open={open}
      onSubmit={handleSubmit(
        clientDataToEdit ? onUpdateClient : onCreateNewClient
      )}
      submitText={clientDataToEdit ? "Editar cliente" : "Criar cliente"}
      title={clientDataToEdit ? "Editar cliente" : "Criar cliente"}
      loading={isSubmitting}
    >
      <div className={style.fields}>
        <input
          type="text"
          className={style.input}
          {...register("name")}
          placeholder="Digite o nome:"
        />
        {errors.name && (
          <p className={style.errorText}>{errors.name.message}</p>
        )}

        <input
          className={style.input}
          {...register("salary", { valueAsNumber: true })}
          placeholder="Digite o salário:"
        />
        {errors.salary && (
          <p className={style.errorText}>{errors.salary.message}</p>
        )}

        <input
          className={style.input}
          {...register("companyValue", { valueAsNumber: true })}
          placeholder="Digite o valor da empresa:"
        />
        {errors.companyValue && (
          <p className={style.errorText}>{errors.companyValue.message}</p>
        )}
      </div>
    </ModalLayout>
  );
}
