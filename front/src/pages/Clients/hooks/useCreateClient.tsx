import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clientSchema, INewClient } from "../interfaces/INewClient";
import { createNewClientService } from "../../../services/client/createNewClient/createNewClientService";
import { IClient } from "../../../types/models/IClient";
import { updateClientService } from "../../../services/client/updateClient/updateClientService";

type Props = {
  clientDataToEdit: IClient | null;
  onClose: () => void;
  fetchData: () => void;
};
export default function useCreateClient({
  onClose,
  fetchData,
  clientDataToEdit,
}: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<INewClient>({
    defaultValues: clientDataToEdit || {
      name: "",
      companyValue: 0,
      salary: 0,
    },
    resolver: zodResolver(clientSchema),
  });

  async function onCreateNewClient(data: INewClient) {
    await createNewClientService({ clientData: data })
      .then(() => {
        fetchData();
        onClose();
        reset();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  async function onUpdateClient(data: INewClient) {
    if (!clientDataToEdit?.id) return;

    await updateClientService(clientDataToEdit?.id, {
      ...data,
    })
      .then(() => {
        fetchData();
        reset();
        onClose();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    onCreateNewClient,
    errors,
    onUpdateClient,
  };
}
