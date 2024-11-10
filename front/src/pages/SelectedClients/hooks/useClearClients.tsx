import { clearClientsService } from "../../../services/client/clearClients/clearClientsService";
import { useForm } from "react-hook-form";
import { IClient } from "../../../types/models/IClient";

type Props = {
  selectedClients: IClient[];
  fetchData: () => void
  onClose: () => void
};

export function useClearClients({ selectedClients, fetchData, onClose }: Props) {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  async function onClearClients() {
    const clientsIdsToClear = selectedClients
      .filter((client) => client.selected)
      .map((client) => client.id);

    await clearClientsService(clientsIdsToClear)
      .then(() => {
        fetchData()
        onClose()
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return {
    onClearClients,
    handleSubmit,
    isSubmitting,
  };
}
