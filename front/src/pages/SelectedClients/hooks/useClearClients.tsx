import { clearClientsService } from "../../../services/client/clearClients/clearClientsService";
import { useForm } from "react-hook-form";

export function useClearClients() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  async function onClearClients() {
    await clearClientsService([])
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("error", err);
      })
  }

  return {
    onClearClients,
    handleSubmit,
    isSubmitting,
  };
}
