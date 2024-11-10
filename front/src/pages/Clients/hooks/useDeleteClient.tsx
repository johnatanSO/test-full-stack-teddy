import { useForm } from "react-hook-form";
import { IClient } from "../../../types/models/IClient";
import { deleteClientService } from "../../../services/client/deleteClient/deleteClientService";

type Props = {
  clientToDelete: IClient | null;
  onClose: () => void;
  fetchData: () => void;
};

export default function useDeleteClient({
  clientToDelete,
  fetchData,
  onClose,
}: Props) {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  async function onDeleteClient() {
    if (!clientToDelete) return 
    
    await deleteClientService(clientToDelete.id)
    .then(() => {
      fetchData()
      onClose()
    })
    .catch((err) => {
      console.log('err', err)
    })
  }

  return {
    handleSubmit,
    isSubmitting,
    onDeleteClient,
  };
}
